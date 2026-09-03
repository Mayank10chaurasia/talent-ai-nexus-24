import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import type { User, Role } from "@/types";
import { authApi, tokenStore } from "@/services/api";

interface AuthState {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<User>;
  signup: (name: string, email: string, password: string, role: Role) => Promise<User>;
  logout: () => void;
  refresh: () => Promise<void>;
}

const AuthContext = createContext<AuthState | null>(null);
const USER_KEY = "hireai_user";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const raw = localStorage.getItem(USER_KEY);
    if (raw) setUser(JSON.parse(raw));
    if (tokenStore.get()) {
      authApi
        .me()
        .then(({ user }) => persist(user))
        .catch(() => {
          tokenStore.clear();
          persist(null);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const persist = (u: User | null) => {
    setUser(u);
    if (u) localStorage.setItem(USER_KEY, JSON.stringify(u));
    else localStorage.removeItem(USER_KEY);
  };

  const login = async (email: string, password: string) => {
    const { token, user } = await authApi.login(email, password);
    tokenStore.set(token);
    persist(user);
    return user;
  };

  const signup = async (name: string, email: string, password: string, role: Role) => {
    const { token, user } = await authApi.signup(name, email, password, role);
    tokenStore.set(token);
    persist(user);
    return user;
  };

  const logout = () => {
    tokenStore.clear();
    persist(null);
  };

  const refresh = async () => {
    if (!tokenStore.get()) return;
    const { user } = await authApi.me();
    persist(user);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout, refresh }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth outside provider");
  return ctx;
}
