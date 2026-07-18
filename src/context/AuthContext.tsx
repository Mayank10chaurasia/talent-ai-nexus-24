import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import type { User, Role } from "@/types";

interface AuthState {
  user: User | null;
  login: (email: string, role: Role) => void;
  signup: (name: string, email: string, role: Role) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthState | null>(null);
const KEY = "hireai_user";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const raw = localStorage.getItem(KEY);
    if (raw) setUser(JSON.parse(raw));
  }, []);
  const persist = (u: User | null) => {
    setUser(u);
    if (u) localStorage.setItem(KEY, JSON.stringify(u));
    else localStorage.removeItem(KEY);
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        login: (email, role) =>
          persist({
            id: "u_1",
            email,
            role,
            name: email.split("@")[0].replace(/\b\w/g, (c) => c.toUpperCase()),
          }),
        signup: (name, email, role) =>
          persist({ id: "u_1", email, role, name }),
        logout: () => persist(null),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth outside provider");
  return ctx;
}
