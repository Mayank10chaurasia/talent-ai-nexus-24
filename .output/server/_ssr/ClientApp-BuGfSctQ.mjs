import { a as __toESM } from "../_runtime.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { I as require_jsx_runtime, _ as DialogTrigger$1, a as Overlay2, c as Title2, d as DialogClose, f as DialogContent$1, g as DialogTitle$1, h as DialogPortal$1, i as Description2, j as Slot, l as Trigger2, m as DialogOverlay$1, n as Cancel, o as Portal2, p as DialogDescription$1, r as Content2, s as Root2, t as Action, u as Dialog$1 } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { a as Outlet, c as useLocation, d as useSearchParams, i as Navigate, l as useNavigate, n as Link, o as Route, r as NavLink, s as Routes, t as BrowserRouter, u as useParams } from "../_libs/react-router.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as CheckboxIndicator, t as Checkbox$1 } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { a as Label2, c as Root2$1, d as SubTrigger2, f as Trigger, i as ItemIndicator2, l as Separator2, n as Content2$1, o as Portal2$1, r as Item2, s as RadioItem2, t as CheckboxItem2, u as SubContent2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
import { n as Portal, r as Provider, t as Content2$2 } from "../_libs/radix-ui__react-tooltip.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { A as CloudUpload, B as Check, C as LogOut, D as EllipsisVertical, E as Eye, F as CircleCheckBig, G as Building2, H as Calendar, I as CircleAlert, J as Bookmark, K as Briefcase, L as ChevronUp, M as ClipboardList, N as Circle, O as Download, P as CircleCheck, R as ChevronRight, S as Mail, T as FileSearch, U as CalendarPlus, V as ChartColumn, W as CalendarDays, X as ArrowRight, Y as Bell, _ as Percent, a as Users, b as Menu, c as TrendingUp, d as ShieldCheck, f as Settings, g as PhoneOff, h as Phone, i as VideoOff, j as Clock, k as Compass, l as Star, m as Plus, n as X, o as UsersRound, p as Search, q as Brain, r as Video, s as User, t as Zap, u as Sparkles, v as Mic, w as History, x as MapPin, y as MessageSquare, z as ChevronDown } from "../_libs/lucide-react.mjs";
import { n as AvatarFallback$1, r as AvatarImage$1, t as Avatar$1 } from "../_libs/radix-ui__react-avatar.mjs";
import { i as Trigger$1, n as Portal$1, r as Root2$2, t as Content2$3 } from "../_libs/radix-ui__react-popover.mjs";
import { t as useForm } from "../_libs/react-hook-form.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { t as Root$1 } from "../_libs/radix-ui__react-separator.mjs";
import { a as XAxis, c as CartesianGrid, d as Tooltip, f as Legend, i as YAxis, l as Pie, n as BarChart, o as Bar, p as ResponsiveContainer, r as LineChart, s as Line, t as PieChart, u as Cell } from "../_libs/recharts+[...].mjs";
import { n as Root$2, t as Indicator } from "../_libs/radix-ui__react-progress.mjs";
import { i as Trigger$2, n as List, r as Root2$3, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/radix-ui__react-switch.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ClientApp-BuGfSctQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var TooltipProvider = Provider;
var TooltipContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2$2, {
	ref,
	sideOffset,
	className: cn("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-tooltip-content-transform-origin)", className),
	...props
}) }));
TooltipContent.displayName = Content2$2.displayName;
var BASE = "http://localhost:5000/api";
var AI_BASE = "http://127.0.0.1:8000";
var TOKEN_KEY = "hireai_token";
var tokenStore = {
	get: () => typeof window === "undefined" ? null : localStorage.getItem(TOKEN_KEY),
	set: (token) => localStorage.setItem(TOKEN_KEY, token),
	clear: () => localStorage.removeItem(TOKEN_KEY)
};
function normalizeIds(value) {
	if (Array.isArray(value)) return value.map(normalizeIds);
	if (value && typeof value === "object") {
		const obj = value;
		const out = {};
		for (const [key, val] of Object.entries(obj)) out[key] = normalizeIds(val);
		if ("_id" in out && !("id" in out)) out.id = String(out._id);
		return out;
	}
	return value;
}
async function request(path, opts = {}) {
	const headers = {
		"Content-Type": "application/json",
		...opts.headers
	};
	const token = tokenStore.get();
	if (token) headers.Authorization = `Bearer ${token}`;
	const response = await fetch(`${BASE}${path}`, {
		...opts,
		headers
	});
	const text = await response.text();
	const data = text ? JSON.parse(text) : null;
	if (!response.ok) throw new Error(data?.message || data?.detail || response.statusText);
	return normalizeIds(data);
}
var api = {
	get: (path) => request(path),
	post: (path, body) => request(path, {
		method: "POST",
		body: body !== void 0 ? JSON.stringify(body) : void 0
	}),
	put: (path, body) => request(path, {
		method: "PUT",
		body: body !== void 0 ? JSON.stringify(body) : void 0
	}),
	patch: (path, body) => request(path, {
		method: "PATCH",
		body: body !== void 0 ? JSON.stringify(body) : void 0
	}),
	delete: (path) => request(path, { method: "DELETE" })
};
var authApi = {
	login: (email, password) => api.post("/auth/login", {
		email,
		password
	}),
	signup: (name, email, password, role) => {
		const username = String(name).trim().toLowerCase().replace(/\s+/g, "").replace(/[^a-z0-9]/g, "");
		return api.post("/auth/signup", {
			name,
			username: username || "user",
			email,
			password,
			role
		});
	},
	me: () => api.get("/auth/me"),
	forgot: (email) => api.post("/auth/forgot", { email }),
	reset: (token, password) => api.post("/auth/reset", {
		token,
		password
	})
};
var jobsApi = {
	list: (params = {}) => {
		const qs = new URLSearchParams(params).toString();
		return api.get(`/jobs${qs ? `?${qs}` : ""}`);
	},
	get: (id) => api.get(`/jobs/${id}`),
	create: (body) => api.post("/jobs", body),
	update: (id, body) => api.put(`/jobs/${id}`, body),
	remove: (id) => api.delete(`/jobs/${id}`)
};
var applicationsApi = {
	apply: (jobId, coverLetter) => api.post("/applications", {
		jobId,
		coverLetter
	}),
	mine: () => api.get("/applications/mine"),
	forJob: (jobId) => api.get(`/applications/job/${jobId}`),
	allForCompany: () => api.get("/applications/company/all"),
	setStatus: (id, status) => api.patch(`/applications/${id}/status`, { status })
};
function flattenApplication(app) {
	const cand = app.candidate || {};
	const job = app.job || {};
	return {
		id: String(app.id || app._id),
		name: cand.name || "Candidate",
		email: cand.email || "",
		avatar: cand.avatar,
		jobId: String(job.id || job._id || app.job),
		jobTitle: job.title || "—",
		resumeScore: app.resumeScore ?? 0,
		overallScore: app.overallScore,
		status: app.status || "New",
		appliedAt: app.createdAt ? new Date(app.createdAt).toLocaleDateString() : "",
		interviewStatus: app.interviewStatus,
		skills: cand.skills || [],
		experience: cand.experience || "—",
		education: cand.education || "—",
		location: cand.location || "—",
		aiAnalysis: app.aiAnalysis || {
			matchPercent: app.resumeScore ?? 0,
			confidence: 60,
			strengths: [],
			weaknesses: [],
			missingSkills: [],
			recommendation: ""
		}
	};
}
var aiInterviewApi = {
	start: async (applicationId) => {
		return await api.post(`/interviews/start/${applicationId}`);
	},
	answer: async (applicationId, transcript) => {
		const formData = new FormData();
		formData.append("transcript", transcript);
		const response = await fetch(`${AI_BASE}/interview/${applicationId}/answer`, {
			method: "POST",
			body: formData
		});
		const data = await response.json();
		if (!response.ok) throw new Error(data?.detail || "Failed to submit answer");
		return data;
	}
};
var interviewResultsApi = { save: (interviewId, result) => api.patch(`/interviews/${interviewId}`, {
	status: "Completed",
	result
}) };
var AuthContext = (0, import_react.createContext)(null);
var USER_KEY = "hireai_user";
function AuthProvider({ children }) {
	const [user, setUser] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const raw = localStorage.getItem(USER_KEY);
		if (raw) setUser(JSON.parse(raw));
		if (tokenStore.get()) authApi.me().then(({ user }) => persist(user)).catch(() => {
			tokenStore.clear();
			persist(null);
		}).finally(() => setLoading(false));
		else setLoading(false);
	}, []);
	const persist = (u) => {
		setUser(u);
		if (u) localStorage.setItem(USER_KEY, JSON.stringify(u));
		else localStorage.removeItem(USER_KEY);
	};
	const login = async (email, password) => {
		const { token, user } = await authApi.login(email, password);
		tokenStore.set(token);
		persist(user);
		return user;
	};
	const signup = async (name, email, password, role) => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthContext.Provider, {
		value: {
			user,
			loading,
			login,
			signup,
			logout,
			refresh
		},
		children
	});
}
function useAuth() {
	const ctx = (0, import_react.useContext)(AuthContext);
	if (!ctx) throw new Error("useAuth outside provider");
	return ctx;
}
function RequireRole({ role, children }) {
	const { user } = useAuth();
	const loc = useLocation();
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/login",
		state: { from: loc.pathname },
		replace: true
	});
	if (user.role !== role) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: user.role === "company" ? "/company" : "/candidate",
		replace: true
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Sheet = Dialog$1;
var SheetTrigger = DialogTrigger$1;
var SheetPortal = DialogPortal$1;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay$1.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent$1.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle$1.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription$1.displayName;
var nav = [
	{
		to: "/features",
		label: "Features"
	},
	{
		to: "/how-it-works",
		label: "How It Works"
	},
	{
		to: "/pricing",
		label: "Pricing"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function MarketingLayout() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-40 border-b bg-background/80 backdrop-blur-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-9 w-9 place-items-center rounded-xl",
								style: { background: "var(--gradient-primary)" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-primary-foreground" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-lg font-bold",
								children: "HireAI"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden md:flex items-center gap-1",
							children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
								to: n.to,
								className: ({ isActive }) => `px-3 py-2 text-sm font-medium rounded-lg transition-colors ${isActive ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"}`,
								children: n.label
							}, n.to))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden md:flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "ghost",
								size: "sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/login",
									children: "Login"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "sm",
								className: "rounded-xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/signup",
									children: "Get Started"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
							open,
							onOpenChange: setOpen,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
								asChild: true,
								className: "md:hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetContent, {
								side: "right",
								className: "w-72",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-col gap-2",
									children: [nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: n.to,
										onClick: () => setOpen(false),
										className: "px-3 py-2 rounded-lg hover:bg-muted",
										children: n.label
									}, n.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex flex-col gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											variant: "outline",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/login",
												onClick: () => setOpen(false),
												children: "Login"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/signup",
												onClick: () => setOpen(false),
												children: "Get Started"
											})
										})]
									})]
								})
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.main, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				className: "flex-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t bg-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 py-12 grid gap-8 md:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-8 w-8 place-items-center rounded-lg",
								style: { background: "var(--gradient-primary)" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-primary-foreground" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display font-bold",
								children: "HireAI"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: "AI-powered hiring, from resume to offer."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-sm font-semibold mb-3",
							children: "Product"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-2 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/features",
									className: "hover:text-foreground",
									children: "Features"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/pricing",
									className: "hover:text-foreground",
									children: "Pricing"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/how-it-works",
									className: "hover:text-foreground",
									children: "How it works"
								}) })
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-sm font-semibold mb-3",
							children: "Company"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-2 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "hover:text-foreground",
									children: "Contact"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "About" }) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Careers" }) })
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-sm font-semibold mb-3",
							children: "Get Started"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								size: "sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/signup",
									children: "Sign up"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/login",
									children: "Login"
								})
							})]
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t py-4 text-center text-xs text-muted-foreground",
					children: "© 2026 HireAI. All rights reserved."
				})]
			})
		]
	});
}
function AuthLayout() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen grid lg:grid-cols-2 bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hidden lg:flex flex-col justify-between p-10 relative overflow-hidden",
			style: { background: "var(--gradient-hero)" },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2 relative z-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-9 w-9 place-items-center rounded-xl",
						style: { background: "var(--gradient-primary)" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-primary-foreground" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg font-bold",
						children: "HireAI"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl font-bold leading-tight max-w-md",
						children: "Hire smarter with AI-powered screening & interviews."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground max-w-md",
						children: "Replace hours of screening with seconds. Give every candidate a fair, structured evaluation."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -bottom-32 -right-32 h-96 w-96 rounded-full blur-3xl opacity-40",
					style: { background: "var(--gradient-primary)" }
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center justify-center p-6 sm:p-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full max-w-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			})
		})]
	});
}
function AppSidebar({ items, onNav }) {
	const { user, logout } = useAuth();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "flex h-full w-64 flex-col border-r bg-sidebar",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: user?.role === "company" ? "/company/jobs" : "/candidate/jobs",
				className: "flex items-center gap-2 px-6 h-16 border-b",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-8 w-8 place-items-center rounded-lg",
					style: { background: "var(--gradient-primary)" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-primary-foreground" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-lg font-bold",
					children: "HireAI"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex-1 overflow-y-auto p-3",
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
					to: item.to,
					end: true,
					onClick: onNav,
					className: ({ isActive }) => cn("group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all", isActive ? "bg-primary text-primary-foreground shadow-sm" : "text-sidebar-foreground hover:bg-sidebar-accent"),
					children: ({ isActive }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-4 w-4 shrink-0" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate",
							children: item.label
						}),
						isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							layoutId: "sidebar-dot",
							className: "ml-auto h-1.5 w-1.5 rounded-full bg-primary-foreground"
						})
					] })
				}, item.to))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-3 border-t",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					className: "w-full justify-start gap-3",
					onClick: () => {
						logout();
						onNav?.();
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), " Logout"]
				})
			})
		]
	});
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Avatar = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar$1, {
	ref,
	className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
	...props
}));
Avatar.displayName = Avatar$1.displayName;
var AvatarImage = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage$1, {
	ref,
	className: cn("aspect-square h-full w-full", className),
	...props
}));
AvatarImage.displayName = AvatarImage$1.displayName;
var AvatarFallback = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback$1, {
	ref,
	className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
	...props
}));
AvatarFallback.displayName = AvatarFallback$1.displayName;
var DropdownMenu = Root2$1;
var DropdownMenuTrigger = Trigger;
var DropdownMenuSubTrigger = import_react.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubTrigger2, {
	ref,
	className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-auto" })]
}));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
var DropdownMenuSubContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubContent2, {
	ref,
	className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}));
DropdownMenuSubContent.displayName = SubContent2.displayName;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2$1, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2$1, {
	ref,
	sideOffset,
	className: cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}) }));
DropdownMenuContent.displayName = Content2$1.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
	...props
}));
DropdownMenuItem.displayName = Item2.displayName;
var DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	checked,
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), children]
}));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
var DropdownMenuRadioItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-2 w-2 fill-current" }) })
	}), children]
}));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
var DropdownMenuLabel = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label2, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
	...props
}));
DropdownMenuLabel.displayName = Label2.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
DropdownMenuSeparator.displayName = Separator2.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("ml-auto text-xs tracking-widest opacity-60", className),
		...props
	});
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var Popover = Root2$2;
var PopoverTrigger = Trigger$1;
var PopoverContent = import_react.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal$1, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2$3, {
	ref,
	align,
	sideOffset,
	className: cn("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)", className),
	...props
}) }));
PopoverContent.displayName = Content2$3.displayName;
function Topbar({ onMenuClick }) {
	const { user, logout } = useAuth();
	const nav = useNavigate();
	const initials = user?.name?.split(" ").map((s) => s[0]).slice(0, 2).join("") ?? "U";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "h-16 border-b bg-background/80 backdrop-blur-xl sticky top-0 z-30",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-full items-center gap-3 px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					className: "lg:hidden",
					onClick: onMenuClick,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1 max-w-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "Search…",
						className: "pl-9 bg-muted/50 border-transparent focus-visible:bg-background rounded-xl"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						size: "icon",
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-2 right-2 h-2 w-2 rounded-full bg-primary" })]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PopoverContent, {
					align: "end",
					className: "w-80 p-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-4 border-b",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-semibold text-sm",
							children: "Notifications"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "divide-y",
						children: [
							"New applicant for Frontend Engineer",
							"Interview completed with Noah",
							"AI shortlisted 5 candidates"
						].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 text-sm hover:bg-muted/50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-0.5",
								children: "Just now"
							})]
						}, t))
					})]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "flex items-center gap-2 rounded-xl px-1.5 py-1 hover:bg-muted transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
							className: "h-8 w-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { children: initials })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:block text-sm font-medium max-w-[120px] truncate",
							children: user?.name
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
					align: "end",
					className: "w-56",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: user?.email }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: user?.role === "company" ? "/company/profile" : "/candidate/profile",
								children: "Profile"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: user?.role === "company" ? "/company/settings" : "/candidate/settings",
								children: "Settings"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
							onClick: () => {
								logout();
								nav("/");
							},
							children: "Logout"
						})
					]
				})] })
			]
		})
	});
}
var companyNav = [
	{
		to: "/company/jobs",
		label: "Jobs",
		icon: Briefcase
	},
	{
		to: "/company/shortlisted",
		label: "Shortlisted",
		icon: Star
	},
	{
		to: "/company/interviews",
		label: "Interviews",
		icon: CalendarDays
	},
	{
		to: "/company/reports",
		label: "Reports",
		icon: ChartColumn
	},
	{
		to: "/company/profile",
		label: "Company Profile",
		icon: Building2
	},
	{
		to: "/company/settings",
		label: "Settings",
		icon: Settings
	}
];
var candidateNav = [
	{
		to: "/candidate/jobs",
		label: "Browse Jobs",
		icon: Compass
	},
	{
		to: "/candidate/applied",
		label: "Applied Jobs",
		icon: ClipboardList
	},
	{
		to: "/candidate/interviews",
		label: "Upcoming Interviews",
		icon: Video
	},
	{
		to: "/candidate/interviews/history",
		label: "Interview History",
		icon: History
	},
	{
		to: "/candidate/profile",
		label: "Profile",
		icon: User
	},
	{
		to: "/candidate/settings",
		label: "Settings",
		icon: Settings
	}
];
function DashboardLayout({ variant }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const items = variant === "company" ? companyNav : candidateNav;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppSidebar, { items })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
				open,
				onOpenChange: setOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetContent, {
					side: "left",
					className: "p-0 w-64",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppSidebar, {
						items,
						onNav: () => setOpen(false)
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 flex flex-col min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Topbar, { onMenuClick: () => setOpen(true) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.main, {
					initial: {
						opacity: 0,
						y: 8
					},
					animate: {
						opacity: 1,
						y: 0
					},
					className: "flex-1 p-4 sm:p-6 lg:p-8 max-w-[1400px] w-full mx-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}, variant)]
			})
		]
	});
}
var Card = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
	...props
}));
Card.displayName = "Card";
var CardHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex flex-col space-y-1.5 p-6", className),
	...props
}));
CardHeader.displayName = "CardHeader";
var CardTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("font-semibold leading-none tracking-tight", className),
	...props
}));
CardTitle.displayName = "CardTitle";
var CardDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
CardDescription.displayName = "CardDescription";
var CardContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("p-6 pt-0", className),
	...props
}));
CardContent.displayName = "CardContent";
var CardFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex items-center p-6 pt-0", className),
	...props
}));
CardFooter.displayName = "CardFooter";
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var stagger = (delay = .08) => ({ animate: { transition: { staggerChildren: delay } } });
var item = {
	initial: {
		opacity: 0,
		y: 12
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: { duration: .4 }
	}
};
var features = [
	{
		icon: Brain,
		title: "AI Resume Screening",
		desc: "Rank hundreds of resumes in seconds with contextual understanding."
	},
	{
		icon: Sparkles,
		title: "AI Interviews",
		desc: "Structured, unbiased interviews that adapt in real-time."
	},
	{
		icon: ChartColumn,
		title: "Hiring Analytics",
		desc: "See your funnel, top skills, and where candidates drop off."
	},
	{
		icon: ShieldCheck,
		title: "Fair & Compliant",
		desc: "Bias-aware scoring and auditable decisions across roles."
	},
	{
		icon: Zap,
		title: "Lightning Setup",
		desc: "Post a job, invite candidates, start interviewing today."
	},
	{
		icon: UsersRound,
		title: "Built for Teams",
		desc: "Shared shortlists, notes, and hiring pipelines."
	}
];
var testimonials = [
	{
		name: "Sarah Chen",
		role: "Head of Talent, Nova",
		quote: "HireAI cut our screening time by 80%. The AI interviews feel remarkably human."
	},
	{
		name: "Marcus Reed",
		role: "CTO, Loop",
		quote: "We finally have data on every hiring decision. Game-changing."
	},
	{
		name: "Priya Kapoor",
		role: "Recruiter, Arc",
		quote: "Candidates love the experience. So do our hiring managers."
	}
];
function Landing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 -z-10",
					style: { background: "var(--gradient-hero)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full blur-3xl opacity-30 -z-10",
					style: { background: "var(--gradient-primary)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 pt-20 pb-24 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .6 },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: "outline",
								className: "rounded-full bg-background/60 backdrop-blur px-3 py-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3 mr-1.5" }), " Powered by frontier AI"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]",
								children: [
									"The Future of",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "bg-clip-text text-transparent",
										style: { backgroundImage: "var(--gradient-primary)" },
										children: "AI Hiring"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-2xl mx-auto text-lg text-muted-foreground",
								children: "Automate resume screening, conduct AI interviews, and evaluate candidates intelligently — all on one premium platform."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3 justify-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									className: "rounded-xl h-12 px-6 shadow-lg",
									style: { background: "var(--gradient-primary)" },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/signup?role=company",
										children: ["Hire Talent ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "outline",
									className: "rounded-xl h-12 px-6 bg-background/60 backdrop-blur",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/signup?role=candidate",
										children: "Find Jobs"
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground",
								children: [
									"No credit card",
									"Free forever plan",
									"Bias-aware AI"
								].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-success" }),
										" ",
										t
									]
								}, t))
							})
						]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl sm:text-4xl font-bold",
					children: "Everything you need to hire smarter"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted-foreground",
					children: "A complete hiring OS, from first resume to final offer."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				variants: stagger(),
				initial: "initial",
				whileInView: "animate",
				viewport: { once: true },
				className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants: item,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-6 h-full hover:shadow-lg transition-all hover:-translate-y-1 duration-300",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid place-items-center h-11 w-11 rounded-xl bg-primary/10 text-primary mb-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display font-semibold text-lg",
								children: f.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: f.desc
							})
						]
					})
				}, f.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-center max-w-2xl mx-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl sm:text-4xl font-bold",
					children: "Loved by modern hiring teams"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 md:grid-cols-3",
				children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-0.5 text-warning mb-3",
							children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm leading-relaxed",
							children: [
								"\"",
								t.quote,
								"\""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 pt-5 border-t",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold text-sm",
								children: t.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: t.role
							})]
						})
					]
				}, t.name))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-4 sm:px-6 pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-10 sm:p-14 text-center overflow-hidden relative",
				style: { background: "var(--gradient-hero)" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl sm:text-4xl font-bold",
						children: "Start hiring in minutes"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground max-w-xl mx-auto",
						children: "Join thousands of teams reinventing recruitment with AI."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						className: "mt-8 rounded-xl h-12 px-8",
						style: { background: "var(--gradient-primary)" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/signup",
							children: "Get Started Free"
						})
					})
				]
			})
		})
	] });
}
var groups = [
	{
		title: "AI Screening",
		items: [{
			icon: FileSearch,
			title: "Resume Match Score",
			desc: "Understand which candidates align with your role."
		}, {
			icon: Brain,
			title: "Skill Extraction",
			desc: "Extract skills, experience, and gaps automatically."
		}]
	},
	{
		title: "AI Interviews",
		items: [{
			icon: Sparkles,
			title: "Adaptive Questions",
			desc: "Interviews adapt to the candidate's answers."
		}, {
			icon: MessageSquare,
			title: "Live Transcript",
			desc: "Every word captured and scored."
		}]
	},
	{
		title: "Team & Ops",
		items: [
			{
				icon: UsersRound,
				title: "Shared Shortlists",
				desc: "Collaborate across the hiring team."
			},
			{
				icon: Calendar,
				title: "Interview Scheduler",
				desc: "Manage time zones effortlessly."
			},
			{
				icon: ChartColumn,
				title: "Analytics",
				desc: "Funnel, drop-off, and hiring velocity."
			},
			{
				icon: ShieldCheck,
				title: "Fair & Auditable",
				desc: "Every decision is explainable."
			},
			{
				icon: Zap,
				title: "Fast Setup",
				desc: "Ship your first AI interview today."
			}
		]
	}
];
function Features() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center max-w-2xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl sm:text-5xl font-bold",
				children: "Features that hire smarter"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted-foreground",
				children: "A production-grade platform for AI-powered recruitment."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16 space-y-14",
			children: groups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-semibold mb-6",
				children: g.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: g.items.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6 hover:shadow-lg transition-all",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid place-items-center h-11 w-11 rounded-xl bg-primary/10 text-primary mb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold",
							children: f.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: f.desc
						})
					]
				}, f.title))
			})] }, g.title))
		})]
	});
}
var steps = [
	{
		n: "01",
		title: "Post your job",
		desc: "Craft a job in seconds with our AI-assisted job builder."
	},
	{
		n: "02",
		title: "AI screens applicants",
		desc: "Every resume gets a match score, strengths, and gap analysis."
	},
	{
		n: "03",
		title: "AI interviews",
		desc: "Candidates take structured AI interviews. You review the results."
	},
	{
		n: "04",
		title: "Hire with confidence",
		desc: "Compare candidates, share notes, extend the offer."
	}
];
function HowItWorks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center max-w-2xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl sm:text-5xl font-bold",
				children: "How it works"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted-foreground",
				children: "From posting to offer, four simple steps."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4",
			children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { delay: i * .08 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6 h-full relative overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute -top-2 -right-2 text-6xl font-display font-bold text-primary/10",
							children: s.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display font-semibold text-lg",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: s.desc
						})
					]
				})
			}, s.n))
		})]
	});
}
var tiers = [
	{
		name: "Starter",
		price: "$0",
		desc: "For small teams starting out.",
		cta: "Start free",
		highlight: false,
		features: [
			"Up to 3 active jobs",
			"AI resume screening",
			"Basic analytics",
			"Email support"
		]
	},
	{
		name: "Growth",
		price: "$99",
		desc: "For teams scaling their hiring.",
		cta: "Start trial",
		highlight: true,
		features: [
			"Unlimited jobs",
			"AI interviews",
			"Advanced analytics",
			"Priority support",
			"Team seats"
		]
	},
	{
		name: "Enterprise",
		price: "Custom",
		desc: "For advanced needs.",
		cta: "Contact us",
		highlight: false,
		features: [
			"SSO / SCIM",
			"Custom integrations",
			"Dedicated CSM",
			"SLA & security"
		]
	}
];
function Pricing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center max-w-2xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl sm:text-5xl font-bold",
				children: "Simple, transparent pricing"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted-foreground",
				children: "Start free. Scale as you grow."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14 grid gap-6 md:grid-cols-3",
			children: tiers.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: `p-8 relative ${t.highlight ? "ring-2 ring-primary shadow-xl" : ""}`,
				children: [
					t.highlight && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute -top-3 left-6 rounded-full bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold",
						children: "Most Popular"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-semibold",
						children: t.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: t.desc
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-4xl font-bold",
							children: t.price
						}), t.price !== "Custom" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "/mo"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-3",
						children: t.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-success" }),
								" ",
								f
							]
						}, f))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-8 w-full rounded-xl",
						variant: t.highlight ? "default" : "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/signup",
							children: t.cta
						})
					})
				]
			}, t.name))
		})]
	});
}
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
function Contact() {
	const { register, handleSubmit, reset, formState: { errors } } = useForm();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center max-w-2xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl sm:text-5xl font-bold",
				children: "Get in touch"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted-foreground",
				children: "We'd love to hear from you."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-14 grid gap-8 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4 lg:col-span-1",
				children: [
					{
						icon: Mail,
						label: "Email",
						value: "hello@hireai.com"
					},
					{
						icon: Phone,
						label: "Phone",
						value: "+1 (555) 010-2026"
					},
					{
						icon: MapPin,
						label: "Office",
						value: "San Francisco, CA"
					}
				].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5 flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground uppercase tracking-wider",
							children: c.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium truncate",
							children: c.value
						})]
					})]
				}, c.label))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "lg:col-span-2 p-6 sm:p-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "space-y-4",
					onSubmit: handleSubmit(() => {
						toast.success("Message sent!");
						reset();
					}),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Name" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								...register("name", { required: true }),
								className: "mt-1.5"
							}),
							errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-destructive mt-1",
								children: "Required"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Email" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "email",
								...register("email", { required: true }),
								className: "mt-1.5"
							}),
							errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-destructive mt-1",
								children: "Required"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Message" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							...register("message", { required: true }),
							rows: 5,
							className: "mt-1.5"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "rounded-xl",
							children: "Send message"
						})
					]
				})
			})]
		})]
	});
}
var Checkbox = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
	ref,
	className: cn("grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, {
		className: cn("grid place-content-center text-current"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
	})
}));
Checkbox.displayName = Checkbox$1.displayName;
var Separator = import_react.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$1, {
	ref,
	decorative,
	orientation,
	className: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
	...props
}));
Separator.displayName = Root$1.displayName;
function RoleTabs({ value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-2 gap-2 p-1 rounded-xl bg-muted",
		children: [{
			r: "company",
			label: "Company / HR",
			icon: Building2
		}, {
			r: "candidate",
			label: "Candidate",
			icon: User
		}].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => onChange(i.r),
			className: cn("flex items-center justify-center gap-2 rounded-lg py-2 text-sm font-medium transition-all", value === i.r ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i.icon, { className: "h-4 w-4" }),
				" ",
				i.label
			]
		}, i.r))
	});
}
function Login() {
	const { login } = useAuth();
	const nav = useNavigate();
	const [sp] = useSearchParams();
	const [role, setRole] = (0, import_react.useState)(sp.get("role") || "company");
	const { register, handleSubmit } = useForm();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl font-bold",
			children: "Welcome back"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-muted-foreground",
			children: "Sign in to your HireAI account."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoleTabs, {
				value: role,
				onChange: setRole
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mt-6 space-y-4",
			onSubmit: handleSubmit(async (d) => {
				try {
					const u = await login(d.email, d.password);
					toast.success("Signed in");
					nav(u.role === "company" ? "/company" : "/candidate");
				} catch (e) {
					toast.error(e instanceof Error ? e.message : "Sign in failed");
				}
			}),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Email" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "email",
					required: true,
					placeholder: "you@company.com",
					...register("email"),
					className: "mt-1.5 rounded-xl"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Password" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "password",
					required: true,
					placeholder: "••••••••",
					...register("password"),
					className: "mt-1.5 rounded-xl"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, { ...register("remember") }), " Remember me"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/forgot-password",
						className: "text-primary hover:underline",
						children: "Forgot password?"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					className: "w-full rounded-xl h-11",
					style: { background: "var(--gradient-primary)" },
					children: "Sign in"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "my-6 flex items-center gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "flex-1" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted-foreground",
					children: "OR"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "flex-1" })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				className: "rounded-xl",
				children: "Google"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				className: "rounded-xl",
				children: "GitHub"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-6 text-center text-sm text-muted-foreground",
			children: ["Don't have an account? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/signup",
				className: "text-primary font-medium hover:underline",
				children: "Sign up"
			})]
		})
	] });
}
function Signup() {
	const { signup } = useAuth();
	const nav = useNavigate();
	const [sp] = useSearchParams();
	const [role, setRole] = (0, import_react.useState)(sp.get("role") || "company");
	const { register, handleSubmit } = useForm();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl font-bold",
			children: "Create your account"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-muted-foreground",
			children: "Get started with HireAI in seconds."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoleTabs, {
				value: role,
				onChange: setRole
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mt-6 space-y-4",
			onSubmit: handleSubmit(async (d) => {
				try {
					const u = await signup(d.name, d.email, d.password, role);
					toast.success("Welcome to HireAI");
					nav(u.role === "company" ? "/company" : "/candidate");
				} catch (e) {
					toast.error(e instanceof Error ? e.message : "Signup failed");
				}
			}),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Full name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					required: true,
					...register("name"),
					className: "mt-1.5 rounded-xl"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Email" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "email",
					required: true,
					...register("email"),
					className: "mt-1.5 rounded-xl"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Password" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "password",
					required: true,
					...register("password"),
					className: "mt-1.5 rounded-xl"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					className: "w-full rounded-xl h-11",
					style: { background: "var(--gradient-primary)" },
					children: "Create account"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "my-6 flex items-center gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "flex-1" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted-foreground",
					children: "OR"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "flex-1" })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				className: "rounded-xl",
				children: "Google"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				className: "rounded-xl",
				children: "GitHub"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-6 text-center text-sm text-muted-foreground",
			children: ["Already have an account? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/login",
				className: "text-primary font-medium hover:underline",
				children: "Sign in"
			})]
		})
	] });
}
function Forgot() {
	const { register, handleSubmit } = useForm();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl font-bold",
			children: "Forgot password?"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-muted-foreground",
			children: "Enter your email and we'll send you a reset link."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mt-6 space-y-4",
			onSubmit: handleSubmit(() => toast.success("Reset link sent")),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Email" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				type: "email",
				required: true,
				...register("email"),
				className: "mt-1.5 rounded-xl"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				className: "w-full rounded-xl h-11",
				children: "Send reset link"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-6 text-center text-sm text-muted-foreground",
			children: ["Remembered? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/login",
				className: "text-primary font-medium hover:underline",
				children: "Back to login"
			})]
		})
	] });
}
function Reset() {
	const nav = useNavigate();
	const { register, handleSubmit } = useForm();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl font-bold",
			children: "Reset password"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-muted-foreground",
			children: "Choose a new password for your account."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mt-6 space-y-4",
			onSubmit: handleSubmit(() => {
				toast.success("Password updated");
				nav("/login");
			}),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "New password" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "password",
					required: true,
					...register("p"),
					className: "mt-1.5 rounded-xl"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Confirm password" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "password",
					required: true,
					...register("p2"),
					className: "mt-1.5 rounded-xl"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					className: "w-full rounded-xl h-11",
					children: "Update password"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-6 text-center text-sm text-muted-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/login",
				className: "text-primary font-medium hover:underline",
				children: "Back to login"
			})
		})
	] });
}
function StatCard({ label, value, icon: Icon, trend, tone = "primary" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		whileHover: { y: -3 },
		transition: {
			type: "spring",
			stiffness: 300
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: "p-5 shadow-sm hover:shadow-md transition-shadow",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium text-muted-foreground uppercase tracking-wider",
							children: label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-display text-3xl font-bold tracking-tight",
							children: value
						}),
						trend && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-success",
							children: trend
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `shrink-0 grid place-items-center h-11 w-11 rounded-xl ${{
						primary: "bg-primary/10 text-primary",
						success: "bg-success/10 text-success",
						warning: "bg-warning/10 text-warning",
						destructive: "bg-destructive/10 text-destructive"
					}[tone]}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
				})]
			})
		})
	});
}
function PageHeader({ title, description, actions }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 8
		},
		animate: {
			opacity: 1,
			y: 0
		},
		className: "flex flex-col gap-4 border-b pb-6 sm:flex-row sm:items-end sm:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl font-bold tracking-tight sm:text-3xl",
				children: title
			}), description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: description
			})]
		}), actions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap items-center gap-2",
			children: actions
		})]
	});
}
var chartColors = [
	"oklch(0.55 0.22 260)",
	"oklch(0.7 0.16 160)",
	"oklch(0.78 0.16 70)",
	"oklch(0.65 0.2 320)",
	"oklch(0.6 0.18 200)"
];
function HrDashboard() {
	const [jobs, setJobs] = (0, import_react.useState)([]);
	const [applications, setApplications] = (0, import_react.useState)([]);
	const [interviews, setInterviews] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		let mounted = true;
		Promise.all([
			api.get("/jobs"),
			api.get("/applications/company/all"),
			api.get("/interviews")
		]).then(([jobsRes, appsRes, interviewsRes]) => {
			if (mounted) {
				setJobs(Array.isArray(jobsRes) ? jobsRes : []);
				setApplications(Array.isArray(appsRes) ? appsRes : []);
				setInterviews(Array.isArray(interviewsRes) ? interviewsRes : []);
			}
		}).finally(() => mounted && setLoading(false));
		return () => {
			mounted = false;
		};
	}, []);
	const applicationsPerJob = (0, import_react.useMemo)(() => jobs.map((job) => ({
		name: job.title || "Untitled",
		applications: job.applications ?? 0,
		shortlisted: job.shortlisted ?? 0
	})), [jobs]);
	const funnelData = (0, import_react.useMemo)(() => [
		{
			stage: "Applied",
			value: applications.length
		},
		{
			stage: "Shortlisted",
			value: applications.filter((a) => a.status === "Shortlisted").length
		},
		{
			stage: "Interviewed",
			value: applications.filter((a) => a.status === "Interviewed").length
		},
		{
			stage: "Hired",
			value: applications.filter((a) => a.status === "Hired").length
		}
	], [applications]);
	const interviewStatusData = (0, import_react.useMemo)(() => [
		{
			name: "Upcoming",
			value: interviews.filter((i) => i.status === "Upcoming").length
		},
		{
			name: "Completed",
			value: interviews.filter((i) => i.status === "Completed").length
		},
		{
			name: "Cancelled",
			value: interviews.filter((i) => i.status === "Cancelled").length
		}
	], [interviews]);
	const activity = (0, import_react.useMemo)(() => applications.slice(0, 5).map((app, index) => ({
		id: index + 1,
		text: `${app.candidate?.name || "Candidate"} ${app.status === "Shortlisted" ? "was shortlisted" : "applied"}`,
		time: app.createdAt ? new Date(app.createdAt).toLocaleDateString() : "Recently"
	})), [applications]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Dashboard",
				description: "Overview of your hiring pipeline"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Active Jobs",
						value: jobs.length,
						icon: Briefcase,
						tone: "primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Applications",
						value: applications.length,
						icon: Users,
						tone: "success"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Scheduled Interviews",
						value: interviews.length,
						icon: CalendarDays,
						tone: "warning"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "AI Shortlisted",
						value: applications.filter((a) => a.status === "Shortlisted").length,
						icon: Star,
						tone: "primary"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6 lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display font-semibold mb-4",
						children: "Applications per Job"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-72",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
								data: applicationsPerJob,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										strokeDasharray: "3 3",
										opacity: .2
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "name",
										tick: { fontSize: 12 }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, { tick: { fontSize: 12 } }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
										borderRadius: 12,
										border: "1px solid var(--border)"
									} }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "applications",
										fill: "oklch(0.55 0.22 260)",
										radius: [
											8,
											8,
											0,
											0
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "shortlisted",
										fill: "oklch(0.7 0.16 160)",
										radius: [
											8,
											8,
											0,
											0
										]
									})
								]
							})
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display font-semibold mb-4",
						children: "Interview Status"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-72",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
									data: interviewStatusData,
									dataKey: "value",
									nameKey: "name",
									innerRadius: 50,
									outerRadius: 90,
									paddingAngle: 4,
									children: interviewStatusData.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: chartColors[i] }, i))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: { borderRadius: 12 } }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {})
							] })
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display font-semibold mb-4",
						children: "Hiring Funnel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-64",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
								data: funnelData,
								layout: "vertical",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										type: "number",
										tick: { fontSize: 12 }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										type: "category",
										dataKey: "stage",
										tick: { fontSize: 12 },
										width: 90
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: { borderRadius: 12 } }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "value",
										fill: "oklch(0.55 0.22 260)",
										radius: [
											0,
											8,
											8,
											0
										]
									})
								]
							})
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display font-semibold mb-4",
						children: "Recent Activity"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4",
						children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Loading activity…"
						}) : activity.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-2 mt-2 rounded-full bg-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm",
									children: a.text
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: a.time
								})]
							})]
						}, a.id))
					})]
				})]
			})
		]
	});
}
var map = {
	Open: "bg-success/10 text-success border-success/20",
	Closed: "bg-muted text-muted-foreground border-border",
	Draft: "bg-warning/10 text-warning border-warning/20",
	New: "bg-primary/10 text-primary border-primary/20",
	Shortlisted: "bg-success/10 text-success border-success/20",
	Rejected: "bg-destructive/10 text-destructive border-destructive/20",
	Interviewed: "bg-primary/10 text-primary border-primary/20",
	Hired: "bg-success/10 text-success border-success/20",
	Upcoming: "bg-primary/10 text-primary border-primary/20",
	Completed: "bg-success/10 text-success border-success/20",
	Cancelled: "bg-destructive/10 text-destructive border-destructive/20",
	Scheduled: "bg-primary/10 text-primary border-primary/20",
	Pending: "bg-warning/10 text-warning border-warning/20"
};
function StatusBadge({ status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: "outline",
		className: cn("font-medium", map[status] ?? "bg-muted text-foreground"),
		children: status
	});
}
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
function HrJobs() {
	const [q, setQ] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("all");
	const queryClient = useQueryClient();
	const { data: jobs = [], isLoading } = useQuery({
		queryKey: ["jobs"],
		queryFn: () => jobsApi.list()
	});
	const deleteJob = useMutation({
		mutationFn: (id) => jobsApi.remove(id),
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ["jobs"] });
			toast.success("Job deleted");
		},
		onError: (error) => {
			toast.error(error instanceof Error ? error.message : "Failed to delete job");
		}
	});
	const filtered = jobs.filter((j) => (status === "all" || j.status.toLowerCase() === status) && (j.title.toLowerCase().includes(q.toLowerCase()) || j.department.toLowerCase().includes(q.toLowerCase())));
	const publishJob = useMutation({
		mutationFn: (id) => jobsApi.update(id, { status: "Open" }),
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ["jobs"] });
			toast.success("Job published");
		},
		onError: (error) => {
			toast.error(error instanceof Error ? error.message : "Failed to publish job");
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Jobs",
				description: "Manage your open roles",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "rounded-xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/company/jobs/new",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4 mr-1.5" }), " Create Job"]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: "Search jobs…",
						className: "pl-9 rounded-xl"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: status,
					onValueChange: setStatus,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "w-full sm:w-40 rounded-xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "all",
							children: "All Status"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "open",
							children: "Open"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "closed",
							children: "Closed"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "draft",
							children: "Draft"
						})
					] })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: stagger(.05),
				initial: "initial",
				animate: "animate",
				className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3",
				children: [
					isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Loading jobs…"
					}),
					!isLoading && filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "No jobs yet."
					}),
					filtered.map((j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						variants: item,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "p-6 hover:shadow-lg transition-all hover:-translate-y-0.5 duration-300 h-full flex flex-col",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 flex-wrap",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: j.status }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
													variant: "outline",
													className: "text-xs",
													children: j.employmentType
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-2 font-display font-semibold text-lg truncate",
												children: j.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-muted-foreground",
												children: j.department
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "ghost",
											size: "icon",
											className: "shrink-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EllipsisVertical, { className: "h-4 w-4" })
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
										align: "end",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
												asChild: true,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													to: `/company/jobs/${j.id}`,
													children: "View"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
												asChild: true,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													to: `/company/jobs/${j.id}/edit`,
													children: "Edit"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, { children: "Duplicate" }),
											j.status === "Draft" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
												disabled: publishJob.isPending,
												onSelect: () => publishJob.mutate(j.id),
												children: "Publish"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
												className: "text-destructive",
												disabled: deleteJob.isPending,
												onSelect: (event) => {
													event.preventDefault();
													if (window.confirm(`Delete "${j.title}"? This cannot be undone.`)) deleteJob.mutate(j.id);
												},
												children: "Delete"
											})
										]
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 flex flex-wrap gap-2",
									children: j.skills.slice(0, 3).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "secondary",
										children: s
									}, s))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 grid grid-cols-2 gap-3 text-sm text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }), j.workMode]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: j.experience }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-3.5 w-3.5" }),
												j.applications,
												" applied"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 text-primary" }),
												j.shortlisted,
												" shortlisted"
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 pt-4 border-t flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-sm font-semibold",
										children: [
											"$",
											(j.salaryMin / 1e3).toFixed(0),
											"k – $",
											(j.salaryMax / 1e3).toFixed(0),
											"k"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "outline",
										size: "sm",
										className: "rounded-xl",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: `/company/jobs/${j.id}`,
											children: "View Details"
										})
									})]
								})
							]
						})
					}, j.id))
				]
			})
		]
	});
}
function JobForm({ defaults, onSubmit }) {
	const { register, handleSubmit } = useForm({ defaultValues: defaults });
	const [skills, setSkills] = (0, import_react.useState)(["React", "TypeScript"]);
	const [preferred, setPreferred] = (0, import_react.useState)([]);
	const [publish, setPublish] = (0, import_react.useState)(true);
	const addTag = (setter, list) => (e) => {
		if (e.key === "Enter" && e.currentTarget.value) {
			e.preventDefault();
			setter([...list, e.currentTarget.value.trim()]);
			e.currentTarget.value = "";
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit((d) => onSubmit({
			...d,
			skills,
			preferred
		}, publish)),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "p-6 sm:p-8 space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Job Title" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							required: true,
							...register("title"),
							className: "mt-1.5 rounded-xl"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Department" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							required: true,
							...register("department"),
							className: "mt-1.5 rounded-xl"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Employment Type" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							onValueChange: (v) => register("type").onChange({ target: {
								value: v,
								name: "type"
							} }),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								className: "mt-1.5 rounded-xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select…" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: [
								"Full-time",
								"Part-time",
								"Contract",
								"Internship"
							].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: v,
								children: v
							}, v)) })]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Work Mode" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							onValueChange: (v) => register("mode").onChange({ target: {
								value: v,
								name: "mode"
							} }),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								className: "mt-1.5 rounded-xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select…" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: [
								"Remote",
								"Hybrid",
								"Onsite"
							].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: v,
								children: v
							}, v)) })]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Location" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							...register("location"),
							className: "mt-1.5 rounded-xl"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Experience Required" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							placeholder: "3+ years",
							...register("experience"),
							className: "mt-1.5 rounded-xl"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Salary Min ($)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							...register("salaryMin"),
							className: "mt-1.5 rounded-xl"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Salary Max ($)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							...register("salaryMax"),
							className: "mt-1.5 rounded-xl"
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Required Skills" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "Type and press Enter",
						className: "mt-1.5 rounded-xl",
						onKeyDown: addTag(setSkills, skills)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 flex flex-wrap gap-2",
						children: skills.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							variant: "secondary",
							className: "pl-3 pr-1 py-1",
							children: [s, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setSkills(skills.filter((_, ix) => ix !== i)),
								className: "ml-1 rounded-full hover:bg-background/50 p-0.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3" })
							})]
						}, i))
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Preferred Skills" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "Type and press Enter",
						className: "mt-1.5 rounded-xl",
						onKeyDown: addTag(setPreferred, preferred)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 flex flex-wrap gap-2",
						children: preferred.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							variant: "outline",
							className: "pl-3 pr-1 py-1",
							children: [s, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setPreferred(preferred.filter((_, ix) => ix !== i)),
								className: "ml-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3" })
							})]
						}, i))
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Education" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					placeholder: "Bachelor's degree",
					...register("education"),
					className: "mt-1.5 rounded-xl"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Job Description" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					rows: 4,
					...register("description"),
					className: "mt-1.5 rounded-xl"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Responsibilities (one per line)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					rows: 4,
					...register("responsibilities"),
					className: "mt-1.5 rounded-xl"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Requirements (one per line)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					rows: 4,
					...register("requirements"),
					className: "mt-1.5 rounded-xl"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Benefits (one per line)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					rows: 3,
					...register("benefits"),
					className: "mt-1.5 rounded-xl"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Number of Openings" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "number",
						...register("openings"),
						className: "mt-1.5 rounded-xl"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Application Deadline" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "date",
						...register("deadline"),
						className: "mt-1.5 rounded-xl"
					})] })]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 flex flex-wrap gap-3 justify-end",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				variant: "outline",
				className: "rounded-xl",
				onClick: () => setPublish(false),
				children: "Save Draft"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				className: "rounded-xl",
				onClick: () => setPublish(true),
				style: { background: "var(--gradient-primary)" },
				children: "Publish"
			})]
		})]
	});
}
function HrJobCreate() {
	const nav = useNavigate();
	const qc = useQueryClient();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Create Job",
			description: "Fill in the details for your new role",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "outline",
				className: "rounded-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/company/jobs",
					children: "Cancel"
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JobForm, { onSubmit: async (data, publish) => {
			try {
				await jobsApi.create({
					title: data.title,
					department: data.department,
					location: data.location,
					workMode: data.mode || void 0,
					employmentType: data.type || void 0,
					experience: data.experience,
					salaryMin: data.salaryMin ? Number(data.salaryMin) : void 0,
					salaryMax: data.salaryMax ? Number(data.salaryMax) : void 0,
					skills: data.skills,
					preferredSkills: data.preferred,
					education: data.education,
					description: data.description,
					responsibilities: data.responsibilities ? data.responsibilities.split("\n").filter(Boolean) : [],
					requirements: data.requirements ? data.requirements.split("\n").filter(Boolean) : [],
					benefits: data.benefits ? data.benefits.split("\n").filter(Boolean) : [],
					openings: data.openings ? Number(data.openings) : 1,
					deadline: data.deadline,
					status: publish ? "Open" : "Draft"
				});
				await qc.invalidateQueries({ queryKey: ["jobs"] });
				toast.success(publish ? "Job published" : "Draft saved");
				nav("/company/jobs");
			} catch (e) {
				toast.error(e.message || "Failed to create job");
			}
		} })]
	});
}
function HrJobDetail() {
	const { id } = useParams();
	const { data: job, isLoading } = useQuery({
		queryKey: ["job", id],
		queryFn: () => jobsApi.get(id),
		enabled: !!id
	});
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted-foreground",
		children: "Loading…"
	});
	if (!job) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Job not found" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: job.title,
			description: job.department,
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "outline",
				className: "rounded-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: `/company/jobs/${job.id}/edit`,
					children: "Edit"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "rounded-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/company/applicants",
					children: "View Applicants"
				})
			})] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "lg:col-span-2 p-6 sm:p-8 space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: job.status }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								children: job.employmentType
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								children: job.workMode
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold mb-2",
						children: "Description"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground leading-relaxed",
						children: job.description
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold mb-2",
						children: "Responsibilities"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-1 text-sm text-muted-foreground list-disc pl-5",
						children: job.responsibilities.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: r }, r))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold mb-2",
						children: "Requirements"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-1 text-sm text-muted-foreground list-disc pl-5",
						children: job.requirements.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: r }, r))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold mb-2",
						children: "Benefits"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-1 text-sm text-muted-foreground list-disc pl-5",
						children: job.benefits.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: r }, r))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold mb-2",
						children: "Required Skills"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: job.skills.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "secondary",
							children: s
						}, s))
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-6 h-fit space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold",
						children: "Overview"
					}),
					[
						{
							icon: MapPin,
							label: "Location",
							value: `${job.location} · ${job.workMode}`
						},
						{
							icon: Briefcase,
							label: "Experience",
							value: job.experience
						},
						{
							icon: Users,
							label: "Applications",
							value: `${job.applications}`
						},
						{
							icon: Star,
							label: "AI Shortlisted",
							value: `${job.shortlisted}`
						},
						{
							icon: Calendar,
							label: "Deadline",
							value: job.deadline
						}
					].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-9 w-9 place-items-center rounded-xl bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r.icon, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: r.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium truncate",
								children: r.value
							})]
						})]
					}, r.label)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-4 border-t",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Salary"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-xl font-bold",
							children: [
								"$",
								(job.salaryMin / 1e3).toFixed(0),
								"k – $",
								(job.salaryMax / 1e3).toFixed(0),
								"k"
							]
						})]
					})
				]
			})]
		})]
	});
}
function HrJobEdit() {
	const { id } = useParams();
	const nav = useNavigate();
	const qc = useQueryClient();
	const { data: job, isLoading } = useQuery({
		queryKey: ["job", id],
		queryFn: () => jobsApi.get(id),
		enabled: !!id
	});
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted-foreground",
		children: "Loading…"
	});
	if (!job) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Job not found" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: `Edit: ${job.title}`,
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "outline",
				className: "rounded-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: `/company/jobs/${job.id}`,
					children: "Cancel"
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JobForm, {
			defaults: {
				title: job.title,
				department: job.department,
				location: job.location,
				description: job.description,
				experience: job.experience
			},
			onSubmit: async (data) => {
				try {
					await jobsApi.update(job.id, {
						title: data.title,
						department: data.department,
						location: data.location,
						description: data.description,
						experience: data.experience,
						skills: data.skills,
						preferredSkills: data.preferred
					});
					await qc.invalidateQueries({ queryKey: ["jobs"] });
					await qc.invalidateQueries({ queryKey: ["job", job.id] });
					toast.success("Job updated");
					nav(`/company/jobs/${job.id}`);
				} catch (e) {
					toast.error(e.message || "Failed to update job");
				}
			}
		})]
	});
}
var Table = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "relative w-full overflow-auto",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
		ref,
		className: cn("w-full caption-bottom text-sm", className),
		...props
	})
}));
Table.displayName = "Table";
var TableHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
	ref,
	className: cn("[&_tr]:border-b", className),
	...props
}));
TableHeader.displayName = "TableHeader";
var TableBody = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
	ref,
	className: cn("[&_tr:last-child]:border-0", className),
	...props
}));
TableBody.displayName = "TableBody";
var TableFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tfoot", {
	ref,
	className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
	...props
}));
TableFooter.displayName = "TableFooter";
var TableRow = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
	ref,
	className: cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
	...props
}));
TableRow.displayName = "TableRow";
var TableHead = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
	ref,
	className: cn("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
	...props
}));
TableHead.displayName = "TableHead";
var TableCell = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
	ref,
	className: cn("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
	...props
}));
TableCell.displayName = "TableCell";
var TableCaption = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
	ref,
	className: cn("mt-4 text-sm text-muted-foreground", className),
	...props
}));
TableCaption.displayName = "TableCaption";
var Progress = import_react.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$2, {
	ref,
	className: cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Indicator, {
		className: "h-full w-full flex-1 bg-primary transition-all",
		style: { transform: `translateX(-${100 - (value || 0)}%)` }
	})
}));
Progress.displayName = Root$2.displayName;
function ScoreRing({ value, size = 64, label }) {
	const r = size / 2 - 6;
	const c = 2 * Math.PI * r;
	const offset = c - Math.min(100, value) / 100 * c;
	const color = value >= 80 ? "text-success" : value >= 60 ? "text-primary" : value >= 40 ? "text-warning" : "text-destructive";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative inline-flex items-center justify-center",
		style: {
			width: size,
			height: size
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: size,
			height: size,
			className: "-rotate-90",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: size / 2,
				cy: size / 2,
				r,
				strokeWidth: 5,
				className: "stroke-muted",
				fill: "none"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: size / 2,
				cy: size / 2,
				r,
				strokeWidth: 5,
				strokeDasharray: c,
				strokeDashoffset: offset,
				strokeLinecap: "round",
				fill: "none",
				className: `${color} stroke-current transition-all duration-700`
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 flex flex-col items-center justify-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `text-sm font-bold ${color}`,
				children: Math.round(value)
			}), label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[10px] text-muted-foreground",
				children: label
			})]
		})]
	});
}
var Tabs = Root2$3;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger$2, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = Trigger$2.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = Content.displayName;
function ApplicantDrawer({ applicant: a }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
						className: "h-16 w-16",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { children: a.name.split(" ").map((s) => s[0]).join("") })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl font-bold truncate",
								children: a.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground truncate",
								children: a.email
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm mt-1",
								children: [
									a.jobTitle,
									" · ",
									a.location
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreRing, {
						value: a.aiAnalysis.matchPercent,
						label: "Match"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						className: "rounded-xl",
						onClick: () => toast.success("Shortlisted"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 mr-1.5" }), "Shortlist"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: "outline",
						className: "rounded-xl",
						onClick: () => toast.success("Interview scheduled"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, { className: "h-4 w-4 mr-1.5" }), "Schedule"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: "outline",
						className: "rounded-xl text-destructive",
						onClick: () => toast("Rejected"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4 mr-1.5" }), "Reject"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				defaultValue: "ai",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
						className: "grid grid-cols-3 w-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "ai",
								children: "AI Analysis"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "resume",
								children: "Resume"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "profile",
								children: "Profile"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "ai",
						className: "space-y-4 mt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 mb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-semibold",
										children: "AI Resume Analysis"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Match %"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-display text-2xl font-bold",
										children: [a.aiAnalysis.matchPercent, "%"]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Confidence"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-display text-2xl font-bold",
										children: [a.aiAnalysis.confidence, "%"]
									})] })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
									className: "text-sm font-semibold flex items-center gap-1.5 mb-2 text-success",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }), "Strengths"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "text-sm text-muted-foreground space-y-1 list-disc pl-5",
									children: a.aiAnalysis.strengths.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: s }, s))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
									className: "text-sm font-semibold flex items-center gap-1.5 mb-2 text-warning",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4" }), "Weaknesses"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "text-sm text-muted-foreground space-y-1 list-disc pl-5",
									children: a.aiAnalysis.weaknesses.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: s }, s))
								})]
							}),
							a.aiAnalysis.missingSkills.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-sm font-semibold mb-2",
									children: "Missing Skills"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2",
									children: a.aiAnalysis.missingSkills.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "outline",
										className: "text-destructive border-destructive/30",
										children: s
									}, s))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "p-5 bg-primary/5 border-primary/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-wider text-primary font-semibold mb-1",
									children: "Recommendation"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm",
									children: a.aiAnalysis.recommendation
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "resume",
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							className: "p-8 min-h-[400px] grid place-items-center text-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid place-items-center h-14 w-14 rounded-2xl bg-muted mx-auto mb-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5 text-muted-foreground" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: "Resume preview"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground mt-1",
									children: "Full resume rendering placeholder"
								})
							] })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "profile",
						className: "space-y-4 mt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-sm font-semibold mb-2",
									children: "Skills"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2",
									children: a.skills.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "secondary",
										children: s
									}, s))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-sm font-semibold mb-2",
									children: "Experience"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: a.experience
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-sm font-semibold mb-2",
									children: "Education"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: a.education
								})]
							})
						]
					})
				]
			})
		]
	});
}
function HrApplicants() {
	const [q, setQ] = (0, import_react.useState)("");
	const [selected, setSelected] = (0, import_react.useState)(null);
	const { data: raw = [], isLoading } = useQuery({
		queryKey: ["applications", "company"],
		queryFn: () => applicationsApi.allForCompany()
	});
	const list = raw.map((a) => flattenApplication(a)).filter((a) => a.name.toLowerCase().includes(q.toLowerCase()) || a.jobTitle.toLowerCase().includes(q.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Applicants",
				description: `${list.length} candidates in your pipeline`
			}),
			isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Loading applicants…"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Search…",
					className: "pl-9 rounded-xl"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Candidate" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Job" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							className: "w-40",
							children: "Resume Score"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Status" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Applied" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							className: "text-right",
							children: "Actions"
						})
					] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: list.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
						className: "cursor-pointer",
						onClick: () => setSelected(a),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
									className: "h-9 w-9 shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { children: a.name.split(" ").map((s) => s[0]).join("") })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium truncate",
										children: a.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground truncate",
										children: a.email
									})]
								})]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "max-w-[200px] truncate",
								children: a.jobTitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
									value: a.resumeScore,
									className: "h-1.5 w-24"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold w-8",
									children: a.resumeScore
								})]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: a.status }) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "text-sm text-muted-foreground",
								children: a.appliedAt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "text-right",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-end gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "icon",
											variant: "ghost",
											onClick: (e) => {
												e.stopPropagation();
												setSelected(a);
											},
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "icon",
											variant: "ghost",
											onClick: (e) => {
												e.stopPropagation();
												toast.success("Shortlisted");
											},
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "icon",
											variant: "ghost",
											onClick: (e) => {
												e.stopPropagation();
												toast.success("Interview scheduling opened");
											},
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, { className: "h-4 w-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "icon",
											variant: "ghost",
											onClick: (e) => {
												e.stopPropagation();
												toast("Rejected");
											},
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
										})
									]
								})
							})
						]
					}, a.id)) })] })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
				open: !!selected,
				onOpenChange: (o) => !o && setSelected(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetContent, {
					className: "w-full sm:max-w-2xl overflow-y-auto",
					children: selected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApplicantDrawer, { applicant: selected })
				})
			})
		]
	});
}
function HrShortlisted() {
	const [applicants, setApplicants] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		let mounted = true;
		api.get("/applications/company/all").then((res) => {
			if (mounted) setApplicants(Array.isArray(res) ? res : []);
		}).catch((error) => {
			console.error("Failed to load applications:", error);
		}).finally(() => {
			if (mounted) setLoading(false);
		});
		return () => {
			mounted = false;
		};
	}, []);
	const list = applicants.filter((a) => a.status === "Shortlisted").slice(0, 12);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Shortlisted",
			description: "AI-recommended candidates"
		}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "Loading shortlisted candidates…"
		}) : list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "No shortlisted candidates yet."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			variants: stagger(.05),
			initial: "initial",
			animate: "animate",
			className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3",
			children: list.map((a) => {
				const name = a.candidate?.name || "Unknown Candidate";
				const skills = Array.isArray(a.candidate?.skills) ? a.candidate.skills : [];
				const jobTitle = a.job?.title || "Unknown Job";
				const experience = a.candidate?.experience || "Not provided";
				const confidence = a.aiAnalysis?.confidence ?? a.resumeScore ?? 0;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants: item,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-6 hover:shadow-lg transition-all h-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
										className: "h-12 w-12",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { children: name.split(" ").map((s) => s[0]).join("").slice(0, 2).toUpperCase() })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-semibold truncate",
											children: name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground truncate",
											children: jobTitle
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreRing, {
										value: confidence,
										label: "AI",
										size: 56
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 grid grid-cols-2 gap-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Resume"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-semibold",
									children: [a.resumeScore ?? 0, "%"]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Experience"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: experience
								})] })]
							}),
							skills.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 flex flex-wrap gap-1.5",
								children: skills.slice(0, 3).map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "secondary",
									className: "text-xs",
									children: skill
								}, skill))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 pt-4 border-t flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "icon",
									variant: "outline",
									className: "rounded-xl",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "icon",
									variant: "outline",
									className: "rounded-xl text-destructive",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
								})]
							})
						]
					})
				}, a._id);
			})
		})]
	});
}
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
function HrInterviews() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [interviews, setInterviews] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		let mounted = true;
		api.get("/interviews").then((res) => {
			if (mounted) setInterviews(Array.isArray(res) ? res : []);
		}).finally(() => mounted && setLoading(false));
		return () => {
			mounted = false;
		};
	}, []);
	const groups = {
		Upcoming: interviews.filter((i) => i.status === "Upcoming"),
		Completed: interviews.filter((i) => i.status === "Completed"),
		Cancelled: interviews.filter((i) => i.status === "Cancelled")
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Interviews",
			description: "Schedule and review AI interviews",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
				open,
				onOpenChange: setOpen,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "rounded-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, { className: "h-4 w-4 mr-1.5" }), "Schedule"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Schedule Interview" }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Candidate" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									placeholder: "Search candidate…",
									className: "mt-1.5 rounded-xl"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Date" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "date",
										className: "mt-1.5 rounded-xl"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Time" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "time",
										className: "mt-1.5 rounded-xl"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Timezone" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										className: "mt-1.5 rounded-xl",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "UTC" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "utc",
											children: "UTC"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "pst",
											children: "PST"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "est",
											children: "EST"
										})
									] })] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Duration" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										className: "mt-1.5 rounded-xl",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "30 min" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "15",
											children: "15 min"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "30",
											children: "30 min"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "60",
											children: "60 min"
										})
									] })] })] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Meeting Type" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "mt-1.5 rounded-xl",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "AI Interview" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "ai",
										children: "AI Interview"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "video",
										children: "Video Call"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "onsite",
										children: "In-person"
									})
								] })] })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Notes" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									className: "mt-1.5 rounded-xl",
									rows: 3
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Google Calendar integration coming soon."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => setOpen(false),
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => {
								toast.success("Interview scheduled");
								setOpen(false);
							},
							children: "Confirm"
						})] })
					]
				})]
			})
		}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "Loading interviews…"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
			defaultValue: "Upcoming",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
					value: "Upcoming",
					children: "Upcoming"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
					value: "Completed",
					children: "Completed"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
					value: "Cancelled",
					children: "Cancelled"
				})
			] }), Object.entries(groups).map(([k, list]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
				value: k,
				className: "space-y-3 mt-4",
				children: [list.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted-foreground",
					children: [
						"No ",
						k.toLowerCase(),
						" interviews."
					]
				}), list.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5 flex items-center gap-4 flex-wrap hover:shadow-md transition-shadow",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
							className: "h-11 w-11 shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { children: i.candidateName.split(" ").map((s) => s[0]).join("") })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold truncate",
								children: i.candidateName
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground truncate",
								children: i.jobTitle
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3.5 w-3.5" }), i.date.split("T")[0]]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5" }), i.date.split("T")[1]]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: i.status }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "outline",
							className: "rounded-xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { className: "h-4 w-4 mr-1" }), "Join"]
						})
					]
				}, i.id))]
			}, k))]
		})]
	});
}
var trend = Array.from({ length: 8 }).map((_, i) => ({
	week: `W${i + 1}`,
	applied: 40 + i * 6 + i % 2 * 8,
	hired: 3 + Math.floor(i / 2)
}));
function HrReports() {
	const [jobs, setJobs] = (0, import_react.useState)([]);
	const [interviews, setInterviews] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		let mounted = true;
		Promise.all([api.get("/jobs"), api.get("/interviews")]).then(([jobsRes, interviewsRes]) => {
			if (mounted) {
				setJobs(Array.isArray(jobsRes) ? jobsRes : []);
				setInterviews(Array.isArray(interviewsRes) ? interviewsRes : []);
			}
		}).finally(() => mounted && setLoading(false));
		return () => {
			mounted = false;
		};
	}, []);
	const applicationsPerJob = (0, import_react.useMemo)(() => jobs.map((job) => ({
		name: job.title || "Untitled",
		applications: job.applications ?? 0,
		shortlisted: job.shortlisted ?? 0
	})), [jobs]);
	const topSkills = (0, import_react.useMemo)(() => {
		const counts = jobs.flatMap((job) => job.skills || []).reduce((acc, skill) => {
			acc[skill] = (acc[skill] ?? 0) + 1;
			return acc;
		}, {});
		return Object.entries(counts).map(([skill, count]) => ({
			skill,
			count
		})).sort((a, b) => b.count - a.count).slice(0, 5);
	}, [jobs]);
	const totalApplications = applicationsPerJob.reduce((sum, item) => sum + item.applications, 0);
	const completedInterviews = interviews.filter((i) => i.status === "Completed").length;
	const selectionRate = totalApplications ? `${Math.round(completedInterviews / totalApplications * 100)}%` : "0%";
	const interviewScore = interviews.reduce((sum, it) => sum + (it.result?.overall ?? 0), 0);
	const avgInterviewScore = interviews.length ? Math.round(interviewScore / interviews.length) : 0;
	const hires = interviews.filter((i) => i.status === "Completed" && i.result?.overall >= 80).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Reports",
				description: "Hiring analytics & performance",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					className: "rounded-xl",
					onClick: () => toast.success("Report exported"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4 mr-1.5" }), "Export PDF"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Applications",
						value: totalApplications,
						icon: Users,
						tone: "primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Selection Rate",
						value: selectionRate,
						icon: Percent,
						tone: "success"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Interview Score",
						value: avgInterviewScore.toString(),
						icon: TrendingUp,
						tone: "warning"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Hires",
						value: hires,
						icon: CircleCheckBig,
						tone: "success"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display font-semibold mb-4",
							children: "Hiring Funnel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-72",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
								data: [
									{
										stage: "Applied",
										value: totalApplications
									},
									{
										stage: "Completed",
										value: completedInterviews
									},
									{
										stage: "Hired",
										value: hires
									}
								],
								layout: "vertical",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										type: "number",
										tick: { fontSize: 12 }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										type: "category",
										dataKey: "stage",
										tick: { fontSize: 12 },
										width: 90
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: { borderRadius: 12 } }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "value",
										fill: "oklch(0.55 0.22 260)",
										radius: [
											0,
											8,
											8,
											0
										]
									})
								]
							}) })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display font-semibold mb-4",
							children: "Application Trend"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-72",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
								data: trend,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										strokeDasharray: "3 3",
										opacity: .2
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "week",
										tick: { fontSize: 12 }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, { tick: { fontSize: 12 } }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: { borderRadius: 12 } }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
										type: "monotone",
										dataKey: "applied",
										stroke: "oklch(0.55 0.22 260)",
										strokeWidth: 2.5,
										dot: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
										type: "monotone",
										dataKey: "hired",
										stroke: "oklch(0.7 0.16 160)",
										strokeWidth: 2.5,
										dot: false
									})
								]
							}) })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display font-semibold mb-4",
							children: "Most Applied Jobs"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-72",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
								data: applicationsPerJob,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										strokeDasharray: "3 3",
										opacity: .2
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "name",
										tick: { fontSize: 11 }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, { tick: { fontSize: 12 } }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: { borderRadius: 12 } }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "applications",
										fill: "oklch(0.55 0.22 260)",
										radius: [
											8,
											8,
											0,
											0
										]
									})
								]
							}) })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display font-semibold mb-4",
							children: "Top Skills"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "Loading skills…"
							}) : topSkills.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-sm mb-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: s.skill
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: s.count
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-2 rounded-full bg-muted overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full rounded-full",
									style: {
										width: `${s.count / topSkills[0].count * 100}%`,
										background: "var(--gradient-primary)"
									}
								})
							})] }, s.skill))
						})]
					})
				]
			})
		]
	});
}
function HrCompanyProfile() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Company Profile",
			description: "Manage your company information"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
			onSubmit: (e) => {
				e.preventDefault();
				toast.success("Profile saved");
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-6 sm:p-8 space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
							className: "h-20 w-20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { children: "HA" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							className: "rounded-xl",
							children: "Upload Logo"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-1",
							children: "PNG/JPG up to 2MB"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Company Name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								defaultValue: "HireAI",
								className: "mt-1.5 rounded-xl"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Website" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								defaultValue: "https://hireai.com",
								className: "mt-1.5 rounded-xl"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Industry" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								defaultValue: "tech",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "mt-1.5 rounded-xl",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "tech",
										children: "Technology"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "fin",
										children: "Finance"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "health",
										children: "Healthcare"
									})
								] })]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Company Size" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								defaultValue: "50-200",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "mt-1.5 rounded-xl",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "1-10",
										children: "1–10"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "10-50",
										children: "10–50"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "50-200",
										children: "50–200"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "200+",
										children: "200+"
									})
								] })]
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Address" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						rows: 2,
						defaultValue: "123 Market St, San Francisco, CA",
						className: "mt-1.5 rounded-xl"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-4 border-t",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold mb-3",
							children: "Recruiter Information"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								defaultValue: "Jane Doe",
								className: "mt-1.5 rounded-xl"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Email" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								defaultValue: "jane@hireai.com",
								className: "mt-1.5 rounded-xl"
							})] })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "rounded-xl",
							children: "Save Changes"
						})
					})
				]
			})
		})]
	});
}
var Switch = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
	className: cn("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
	...props,
	ref,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: cn("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0") })
}));
Switch.displayName = Switch$1.displayName;
var AlertDialog = Root2;
var AlertDialogTrigger = Trigger2;
var AlertDialogPortal = Portal2;
var AlertDialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlay2, {
	className: cn("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
AlertDialogOverlay.displayName = Overlay2.displayName;
var AlertDialogContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props
})] }));
AlertDialogContent.displayName = Content2.displayName;
var AlertDialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title2, {
	ref,
	className: cn("text-lg font-semibold", className),
	...props
}));
AlertDialogTitle.displayName = Title2.displayName;
var AlertDialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description2, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
AlertDialogDescription.displayName = Description2.displayName;
var AlertDialogAction = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
	ref,
	className: cn(buttonVariants(), className),
	...props
}));
AlertDialogAction.displayName = Action.displayName;
var AlertDialogCancel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cancel, {
	ref,
	className: cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className),
	...props
}));
AlertDialogCancel.displayName = Cancel.displayName;
function SettingsPage() {
	const [dark, setDark] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Settings",
				description: "Manage account preferences"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-6 space-y-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-semibold",
					children: "Appearance"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: "Dark theme"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Toggle dark mode"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
						checked: dark,
						onCheckedChange: (v) => {
							setDark(v);
							document.documentElement.classList.toggle("dark", v);
						}
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-6 space-y-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-semibold",
					children: "Notifications"
				}), [
					"Email notifications",
					"Interview reminders",
					"New alerts",
					"Weekly digest"
				].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: l }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, { defaultChecked: true })]
				}, l))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-6 space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-semibold",
					children: "Password"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "grid gap-3 sm:grid-cols-2",
					onSubmit: (e) => {
						e.preventDefault();
						toast.success("Password updated");
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Current" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "password",
							className: "mt-1.5 rounded-xl"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "New" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "password",
							className: "mt-1.5 rounded-xl"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2 flex justify-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								className: "rounded-xl",
								children: "Update Password"
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-6 space-y-4 border-destructive/40",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-destructive",
						children: "Danger Zone"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "This action cannot be undone."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialog, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "destructive",
							className: "rounded-xl",
							children: "Delete Account"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTitle, { children: "Are you sure?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogDescription, { children: "This will permanently delete your account." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, { children: "Cancel" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction, {
						onClick: () => toast("Deletion requested"),
						children: "Delete"
					})] })] })] })
				]
			})
		]
	});
}
var Settings_default = SettingsPage;
function CandDashboard() {
	const { data: jobs = [], isLoading: loading } = useQuery({
		queryKey: ["jobs", "open"],
		queryFn: () => jobsApi.list({ status: "Open" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Welcome back",
				description: "Here's your hiring journey"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Applications",
						value: 8,
						icon: ClipboardList,
						tone: "primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Interview Invites",
						value: 3,
						icon: CalendarDays,
						tone: "warning"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Completed",
						value: 2,
						icon: CircleCheckBig,
						tone: "success"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "AI Avg Score",
						value: 84,
						icon: Sparkles,
						tone: "primary"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display font-semibold",
						children: "Recommended jobs"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "ghost",
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/candidate/jobs",
							children: "See all"
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3",
					children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Loading jobs…"
					}) : jobs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "No jobs available yet."
					}) : jobs.slice(0, 3).map((j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-5 hover:shadow-md transition",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-semibold",
								children: j.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-0.5",
								children: j.companyName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm mt-2 flex items-center gap-1 text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }), j.location]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 flex flex-wrap gap-1.5",
								children: j.skills.slice(0, 3).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "secondary",
									className: "text-xs",
									children: s
								}, s))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "sm",
								className: "mt-4 w-full rounded-xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: `/candidate/jobs/${j.id}`,
									children: "View"
								})
							})
						]
					}, j.id))
				})]
			})
		]
	});
}
function CandBrowse() {
	const [q, setQ] = (0, import_react.useState)("");
	const [mode, setMode] = (0, import_react.useState)("all");
	const { data: jobs = [], isLoading } = useQuery({
		queryKey: ["jobs", "open"],
		queryFn: () => jobsApi.list({ status: "Open" })
	});
	const list = jobs.filter((j) => (mode === "all" || j.workMode.toLowerCase() === mode) && j.title.toLowerCase().includes(q.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Browse Jobs",
				description: `${list.length} roles available`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: "Search…",
						className: "pl-9 rounded-xl"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: mode,
					onValueChange: setMode,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "w-full sm:w-40 rounded-xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "all",
							children: "All modes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "remote",
							children: "Remote"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "hybrid",
							children: "Hybrid"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "onsite",
							children: "Onsite"
						})
					] })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: stagger(.05),
				initial: "initial",
				animate: "animate",
				className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3",
				children: [
					isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Loading jobs…"
					}),
					!isLoading && list.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "No open roles right now."
					}),
					list.map((j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						variants: item,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "p-6 hover:shadow-lg transition-all hover:-translate-y-0.5 h-full flex flex-col",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "icon",
										variant: "ghost",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "h-4 w-4" })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-semibold",
									children: j.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: j.companyName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-sm flex items-center gap-1 text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }),
										j.location,
										" · ",
										j.workMode
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 flex flex-wrap gap-1.5",
									children: j.skills.slice(0, 3).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "secondary",
										className: "text-xs",
										children: s
									}, s))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-auto pt-4 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-sm font-semibold",
										children: [
											"$",
											(j.salaryMin / 1e3).toFixed(0),
											"k–$",
											(j.salaryMax / 1e3).toFixed(0),
											"k"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										size: "sm",
										className: "rounded-xl",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: `/candidate/jobs/${j.id}`,
											children: "View"
										})
									})]
								})
							]
						})
					}, j.id))
				]
			})
		]
	});
}
function CandJobDetails() {
	const { id } = useParams();
	const { data: job, isLoading } = useQuery({
		queryKey: ["job", id],
		queryFn: () => jobsApi.get(id),
		enabled: !!id
	});
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted-foreground",
		children: "Loading…"
	});
	if (!job) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Not found" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: job.title,
			description: job.companyName,
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "rounded-xl",
				style: { background: "var(--gradient-primary)" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: `/candidate/jobs/${job.id}/apply`,
					children: "Apply Now"
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "lg:col-span-2 p-6 sm:p-8 space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								children: job.employmentType
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								children: job.workMode
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								children: job.experience
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold mb-2",
						children: "About the role"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground leading-relaxed",
						children: job.description
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold mb-2",
						children: "Responsibilities"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-1 text-sm text-muted-foreground list-disc pl-5",
						children: job.responsibilities.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: r }, r))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold mb-2",
						children: "Requirements"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-1 text-sm text-muted-foreground list-disc pl-5",
						children: job.requirements.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: r }, r))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold mb-2",
						children: "Skills"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: job.skills.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "secondary",
							children: s
						}, s))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold mb-2",
						children: "Benefits"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-1 text-sm text-muted-foreground list-disc pl-5",
						children: job.benefits.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: r }, r))
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-6 h-fit space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold",
							children: job.companyName
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Company Overview"
						})] })]
					}),
					[
						{
							icon: MapPin,
							l: "Location",
							v: `${job.location} · ${job.workMode}`
						},
						{
							icon: Briefcase,
							l: "Experience",
							v: job.experience
						},
						{
							icon: Calendar,
							l: "Deadline",
							v: job.deadline
						}
					].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(r.icon, { className: "h-4 w-4 text-muted-foreground mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: r.l
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium text-sm",
							children: r.v
						})] })]
					}, r.l)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-3 border-t",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Salary"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-xl font-bold",
							children: [
								"$",
								(job.salaryMin / 1e3).toFixed(0),
								"k – $",
								(job.salaryMax / 1e3).toFixed(0),
								"k"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "w-full rounded-xl",
						style: { background: "var(--gradient-primary)" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: `/candidate/jobs/${job.id}/apply`,
							children: "Apply Now"
						})
					})
				]
			})]
		})]
	});
}
function CandApply() {
	const { id } = useParams();
	const nav = useNavigate();
	const [file, setFile] = (0, import_react.useState)(null);
	const [resumeData, setResumeData] = (0, import_react.useState)(null);
	const [resumeLoading, setResumeLoading] = (0, import_react.useState)(false);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const { register, handleSubmit } = useForm();
	(0, import_react.useEffect)(() => {
		if (!file) {
			setResumeData(null);
			setResumeLoading(false);
			return;
		}
		setResumeLoading(true);
		const reader = new FileReader();
		reader.onload = () => {
			const result = reader.result;
			setResumeData(result);
			setResumeLoading(false);
			console.log("Resume converted:", result.startsWith("data:application/pdf;base64,"));
		};
		reader.onerror = () => {
			toast.error("Unable to read resume file.");
			setResumeData(null);
			setResumeLoading(false);
		};
		reader.readAsDataURL(file);
	}, [file]);
	const handleFileChange = (e) => {
		const selectedFile = e.target.files?.[0];
		if (!selectedFile) return;
		if (selectedFile.type !== "application/pdf") {
			toast.error("Please upload a PDF file.");
			e.target.value = "";
			return;
		}
		if (selectedFile.size > 10 * 1024 * 1024) {
			toast.error("Resume must be smaller than 10MB.");
			e.target.value = "";
			return;
		}
		setFile(selectedFile);
	};
	const onSubmit = async (values) => {
		if (!id) {
			toast.error("Job ID not found.");
			return;
		}
		if (!file) {
			toast.error("Please upload your resume.");
			return;
		}
		if (resumeLoading) {
			toast.error("Please wait for your resume to finish processing.");
			return;
		}
		if (!resumeData) {
			toast.error("Resume could not be processed.");
			return;
		}
		setSubmitting(true);
		try {
			await api.post("/applications", {
				jobId: id,
				coverLetter: values.projects || void 0,
				resumeUrl: resumeData
			});
			toast.success("Application submitted");
			nav("/candidate/applied");
		} catch (e) {
			console.error("Application error:", e);
			toast.error(e.response?.data?.message || e.message || "Failed to submit");
		} finally {
			setSubmitting(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Apply for role",
			description: "Submit your application",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "outline",
				className: "rounded-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: `/candidate/jobs/${id}`,
					children: "Cancel"
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleSubmit(onSubmit),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-6 sm:p-8 space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Resume (PDF)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "\r\n                mt-1.5\r\n                flex\r\n                flex-col\r\n                items-center\r\n                justify-center\r\n                border-2\r\n                border-dashed\r\n                rounded-2xl\r\n                p-8\r\n                cursor-pointer\r\n                hover:bg-muted/50\r\n                transition\r\n              ",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "\r\n                  h-8\r\n                  w-8\r\n                  text-muted-foreground\r\n                  mb-2\r\n                " }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: file ? file.name : "Drag & drop your resume"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "\r\n                  text-xs\r\n                  text-muted-foreground\r\n                  mt-1\r\n                ",
								children: "PDF only, max 10MB"
							}),
							resumeLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "\r\n                      text-xs\r\n                      mt-2\r\n                    ",
								children: "Processing resume..."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "file",
								accept: "application/pdf",
								className: "hidden",
								onChange: handleFileChange
							})
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "\r\n              grid\r\n              gap-4\r\n              sm:grid-cols-2\r\n            ",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Full name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								required: true,
								...register("name"),
								className: "\r\n                  mt-1.5\r\n                  rounded-xl\r\n                "
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Email" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "email",
								required: true,
								...register("email"),
								className: "\r\n                  mt-1.5\r\n                  rounded-xl\r\n                "
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Education" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								...register("education"),
								className: "\r\n                  mt-1.5\r\n                  rounded-xl\r\n                "
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Years of experience" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								...register("exp"),
								className: "\r\n                  mt-1.5\r\n                  rounded-xl\r\n                "
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Portfolio" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								...register("portfolio"),
								className: "\r\n                  mt-1.5\r\n                  rounded-xl\r\n                "
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "LinkedIn" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								...register("linkedin"),
								className: "\r\n                  mt-1.5\r\n                  rounded-xl\r\n                "
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "GitHub" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								...register("github"),
								className: "\r\n                  mt-1.5\r\n                  rounded-xl\r\n                "
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Skills" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								placeholder: "\r\n                  React, TypeScript...\r\n                ",
								...register("skills"),
								className: "\r\n                  mt-1.5\r\n                  rounded-xl\r\n                "
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Notable projects" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						rows: 4,
						...register("projects"),
						className: "\r\n                mt-1.5\r\n                rounded-xl\r\n              "
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "\r\n            mt-6\r\n            flex\r\n            justify-end\r\n          ",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					disabled: submitting || resumeLoading,
					className: "rounded-xl",
					style: { background: "var(--gradient-primary)" },
					children: submitting ? "Submitting..." : resumeLoading ? "Processing resume..." : "Submit Application"
				})
			})]
		})]
	});
}
function CandApplied() {
	const { data: apps = [], isLoading } = useQuery({
		queryKey: ["applications", "mine"],
		queryFn: () => applicationsApi.mine()
	});
	const rows = apps.map((a) => ({
		id: a.id,
		title: a.job?.title || "—",
		companyName: a.job?.companyName || "",
		status: a.status,
		postedAt: a.createdAt ? new Date(a.createdAt).toLocaleDateString() : "",
		resumeScore: a.resumeScore ?? 0,
		interview: a.interviewStatus || "Pending",
		feedback: a.aiAnalysis?.recommendation || "Under review"
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Applied Jobs",
				description: "Track your applications"
			}),
			isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Loading…"
			}),
			!isLoading && rows.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "You haven't applied to any jobs yet."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Job" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Status" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Applied" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Resume Score" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Interview" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "AI Feedback" })
					] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: r.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: r.companyName
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: r.status }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "text-sm text-muted-foreground",
							children: r.postedAt
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
								value: r.resumeScore,
								className: "h-1.5 w-20"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold",
								children: r.resumeScore
							})]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: r.interview }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "text-sm text-muted-foreground max-w-[200px] truncate",
							children: r.feedback
						})
					] }, r.id)) })] })
				})
			})
		]
	});
}
function CandUpcoming() {
	const [interviews, setInterviews] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		let mounted = true;
		api.get("/applications/my-interviews").then((res) => {
			console.log("AVAILABLE INTERVIEWS:", res);
			if (mounted) setInterviews(Array.isArray(res) ? res : []);
		}).catch((error) => {
			console.error("Failed to load interviews:", error);
		}).finally(() => {
			if (mounted) setLoading(false);
		});
		return () => {
			mounted = false;
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Upcoming Interviews",
			description: "Get ready for your next AI interview"
		}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "Loading interviews…"
		}) : interviews.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "No upcoming interviews found."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4",
			children: interviews.map((application) => {
				const job = application.job;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6 flex flex-wrap items-center gap-4 hover:shadow-md transition-shadow",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: job?.title || "Unknown Job"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground",
									children: [job?.companyName || "Company", " · AI Interview"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground mt-1",
									children: [
										"Resume Score: ",
										application.resumeScore ?? 0,
										"%"
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-4 text-sm text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-4 w-4" }),
									"Deadline:",
									" ",
									job?.deadline ? new Date(job.deadline).toLocaleDateString() : "Not available"
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: application.status }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "rounded-xl",
							style: { background: "var(--gradient-primary)" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: `/candidate/interviews/${application.id}/room`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { className: "h-4 w-4 mr-1.5" }), "Start Interview"]
							})
						})
					]
				}, application.id);
			})
		})]
	});
}
function formatDate(value) {
	if (!value) return "—";
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return value;
	return date.toLocaleDateString("en", {
		year: "numeric",
		month: "short",
		day: "numeric"
	});
}
function CandHistory() {
	const [interviews, setInterviews] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		let mounted = true;
		api.get("/interviews").then((res) => {
			if (mounted) setInterviews(Array.isArray(res) ? res : []);
		}).catch(() => {
			if (mounted) setInterviews([]);
		}).finally(() => mounted && setLoading(false));
		return () => {
			mounted = false;
		};
	}, []);
	const list = interviews.filter((i) => i.status === "Completed" || Boolean(i.result));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Interview History",
			description: "Past interviews & results"
		}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "Loading interview history…"
		}) : list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "No completed interviews yet."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-2",
			children: list.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-6 flex items-center gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreRing, {
						value: i.result?.overall ?? 0,
						label: "Overall"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold truncate",
							children: i.job?.title ?? "Interview"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: formatDate(i.date)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						variant: "outline",
						className: "rounded-xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: `/candidate/interviews/${i.id}/result`,
							children: "View Result"
						})
					})
				]
			}, i.id))
		})]
	});
}
var speak = (text) => {
	if (!("speechSynthesis" in window)) return;
	window.speechSynthesis.cancel();
	const utterance = new SpeechSynthesisUtterance(text);
	utterance.lang = "en-US";
	utterance.rate = .95;
	window.speechSynthesis.speak(utterance);
};
var stopSpeaking = () => {
	if ("speechSynthesis" in window) window.speechSynthesis.cancel();
};
function CandInterviewRoom() {
	const { id: applicationId } = useParams();
	const navigate = useNavigate();
	const videoRef = (0, import_react.useRef)(null);
	const streamRef = (0, import_react.useRef)(null);
	const recognitionRef = (0, import_react.useRef)(null);
	const finalTranscriptRef = (0, import_react.useRef)("");
	const interviewIdRef = (0, import_react.useRef)(null);
	const [stream, setStream] = (0, import_react.useState)(null);
	const [started, setStarted] = (0, import_react.useState)(false);
	const [starting, setStarting] = (0, import_react.useState)(false);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [recording, setRecording] = (0, import_react.useState)(false);
	const [micEnabled, setMicEnabled] = (0, import_react.useState)(true);
	const [cameraEnabled, setCameraEnabled] = (0, import_react.useState)(true);
	const [question, setQuestion] = (0, import_react.useState)("");
	const [questionNumber, setQuestionNumber] = (0, import_react.useState)(1);
	const [time, setTime] = (0, import_react.useState)(60);
	const [transcript, setTranscript] = (0, import_react.useState)("Waiting for your answer...");
	const totalQuestions = 6;
	const getRecognition = () => {
		const browserWindow = window;
		return browserWindow.SpeechRecognition || browserWindow.webkitSpeechRecognition;
	};
	const startRecognition = () => {
		const Recognition = getRecognition();
		if (!Recognition) {
			setTranscript("Speech recognition is not supported. Use Chrome or Edge.");
			return false;
		}
		finalTranscriptRef.current = "";
		const recognition = new Recognition();
		recognition.lang = "en-US";
		recognition.continuous = true;
		recognition.interimResults = true;
		recognition.onstart = () => {
			setRecording(true);
			setTranscript("Listening...");
		};
		recognition.onresult = (event) => {
			let interim = "";
			for (let index = event.resultIndex; index < event.results.length; index += 1) {
				const result = event.results[index];
				const text = result[0].transcript;
				if (result.isFinal) finalTranscriptRef.current += `${text} `;
				else interim += text;
			}
			setTranscript(`${finalTranscriptRef.current}${interim}`.trim());
		};
		recognition.onerror = (event) => {
			const error = event;
			console.error("Web Speech recognition error:", error.error || event);
			if (error.error === "not-allowed" || error.error === "service-not-allowed") setTranscript("Microphone permission was denied. Allow access and try again.");
			else if (error.error === "no-speech") setTranscript(finalTranscriptRef.current.trim() || "No speech detected. Please speak clearly.");
		};
		recognition.onend = () => {
			setRecording(false);
			recognitionRef.current = null;
		};
		recognitionRef.current = recognition;
		try {
			recognition.start();
			return true;
		} catch (error) {
			console.error("Could not start speech recognition:", error);
			recognitionRef.current = null;
			return false;
		}
	};
	const stopRecognition = () => new Promise((resolve) => {
		const recognition = recognitionRef.current;
		if (!recognition) {
			resolve(finalTranscriptRef.current.trim());
			return;
		}
		recognition.onend = () => resolve(finalTranscriptRef.current.trim());
		recognition.stop();
	});
	const startInterview = async () => {
		if (!applicationId) return;
		try {
			setStarting(true);
			const cameraStream = await navigator.mediaDevices.getUserMedia({ video: true });
			streamRef.current = cameraStream;
			setStream(cameraStream);
			const data = await aiInterviewApi.start(applicationId);
			interviewIdRef.current = data.interviewId;
			if (data.completed) return;
			if (!data.question) throw new Error("No interview question returned");
			setQuestion(data.question);
			setQuestionNumber(data.question_count || 1);
			setTime(60);
			setStarted(true);
			speak(data.question);
		} catch (error) {
			console.error("Failed to start interview:", error);
			setTranscript(error instanceof Error ? error.message : "Could not start interview.");
		} finally {
			setStarting(false);
		}
	};
	const submitAnswer = async () => {
		if (!applicationId || !recording) return;
		setSubmitting(true);
		const answer = await stopRecognition();
		setRecording(false);
		try {
			if (!answer) throw new Error("No speech was recognized. Please try again.");
			setTranscript("Processing your answer...");
			const data = await aiInterviewApi.answer(applicationId, answer);
			setTranscript(data.transcript || answer);
			if (data.completed && data.result && interviewIdRef.current) await interviewResultsApi.save(interviewIdRef.current, data.result);
			if (data.completed) {
				streamRef.current?.getTracks().forEach((track) => track.stop());
				navigate(`/candidate/interviews/${interviewIdRef.current || applicationId}/result`);
				return;
			}
			if (!data.question) throw new Error("No next interview question returned");
			setQuestion(data.question);
			setQuestionNumber(data.question_count || questionNumber + 1);
			setTime(60);
			speak(data.question);
			setTranscript("Press Start Answer when you're ready.");
		} catch (error) {
			console.error("Failed to submit answer:", error);
			setTranscript(error instanceof Error ? error.message : "Could not submit answer.");
		} finally {
			setSubmitting(false);
		}
	};
	const endInterview = () => {
		stopSpeaking();
		recognitionRef.current?.stop();
		streamRef.current?.getTracks().forEach((track) => track.stop());
		navigate(`/candidate/interviews/${interviewIdRef.current || applicationId}/result`);
	};
	const toggleCamera = () => {
		const enabled = !cameraEnabled;
		stream?.getVideoTracks().forEach((track) => {
			track.enabled = enabled;
		});
		setCameraEnabled(enabled);
	};
	(0, import_react.useEffect)(() => {
		const video = videoRef.current;
		if (!video || !stream) return;
		video.srcObject = stream;
		video.play().catch((error) => {
			console.error("Could not start camera preview:", error);
		});
		return () => {
			video.pause();
			video.srcObject = null;
		};
	}, [stream, started]);
	(0, import_react.useEffect)(() => {
		if (!started || time <= 0) return;
		const timer = window.setInterval(() => setTime((value) => Math.max(0, value - 1)), 1e3);
		return () => window.clearInterval(timer);
	}, [started, time]);
	(0, import_react.useEffect)(() => () => {
		stopSpeaking();
		recognitionRef.current?.stop();
		streamRef.current?.getTracks().forEach((track) => track.stop());
	}, []);
	if (!started) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-[70vh] grid place-items-center bg-slate-950 p-6 text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-2xl rounded-3xl border border-white/10 bg-slate-900 p-8 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mx-auto mb-5 h-12 w-12 text-violet-400" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-bold",
					children: "AI Interview"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-slate-400",
					children: "Allow camera and microphone access when prompted."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: startInterview,
					disabled: starting,
					className: "mt-8 h-12 w-full rounded-xl",
					children: starting ? "Starting Interview..." : "Join Interview"
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-slate-950 text-white",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex h-16 items-center justify-between border-b border-white/10 px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-semibold",
				children: "AI Engineer Interview"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "LIVE" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4" }),
					"Question ",
					questionNumber,
					"/",
					totalQuestions
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "grid min-h-[calc(100vh-64px)] lg:grid-cols-[1fr_380px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-col p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1 overflow-hidden rounded-3xl bg-black",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
							ref: videoRef,
							autoPlay: true,
							muted: true,
							playsInline: true,
							className: "h-full min-h-130 w-full object-cover"
						}),
						!cameraEnabled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 grid place-items-center bg-slate-900",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoOff, { className: "h-12 w-12" })
						}),
						recording && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute left-5 top-5 rounded-lg bg-red-600 px-3 py-2 text-sm",
							children: "Listening"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-wrap justify-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "icon",
							onClick: () => setMicEnabled((value) => !value),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "icon",
							onClick: toggleCamera,
							children: cameraEnabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoOff, {})
						}),
						!recording ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: startRecognition,
							disabled: submitting || !micEnabled,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "mr-2 h-4 w-4" }), "Start Answer"]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: submitAnswer,
							disabled: submitting,
							children: submitting ? "Processing..." : "Submit Answer"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "destructive",
							onClick: endInterview,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneOff, { className: "mr-2 h-4 w-4" }), "End"]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "border-l border-white/10 bg-slate-900/50 p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-white/10 bg-slate-900 p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mx-auto h-10 w-10 text-violet-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-center font-semibold",
							children: "AI Interviewer"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 rounded-2xl border border-white/10 bg-slate-900 p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Question ", questionNumber] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [time, "s"] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
								value: questionNumber / totalQuestions * 100,
								className: "mt-3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-lg",
								children: question
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 rounded-2xl border border-white/10 bg-slate-900 p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold",
								children: "Live Transcript"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								children: recording ? "Listening" : submitting ? "Processing" : "Ready"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm text-slate-300",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-white",
									children: "You:"
								}),
								" ",
								transcript
							]
						})]
					})
				]
			})]
		})]
	});
}
var emptyResult = {
	overall: 0,
	technical: 0,
	communication: 0,
	confidence: 0,
	problemSolving: 0,
	strengths: [],
	improvements: []
};
function toScore(value) {
	return typeof value === "number" && Number.isFinite(value) ? value : 0;
}
function CandResult() {
	const { id } = useParams();
	const [interview, setInterview] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		if (!id) {
			setLoading(false);
			return;
		}
		let mounted = true;
		api.get(`/interviews/${id}`).then((res) => {
			if (mounted) setInterview(res);
		}).catch(() => {
			if (mounted) setInterview(null);
		}).finally(() => mounted && setLoading(false));
		return () => {
			mounted = false;
		};
	}, [id]);
	const result = {
		...emptyResult,
		...interview?.result,
		overall: toScore(interview?.result?.overall),
		technical: toScore(interview?.result?.technical),
		communication: toScore(interview?.result?.communication),
		confidence: toScore(interview?.result?.confidence),
		problemSolving: toScore(interview?.result?.problemSolving),
		strengths: interview?.result?.strengths ?? [],
		improvements: interview?.result?.improvements ?? []
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Interview Result",
			description: interview?.job?.title ?? "Interview result",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "outline",
				className: "rounded-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/candidate/interviews/history",
					children: "Back"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				className: "rounded-xl",
				onClick: () => toast.success("Report downloaded"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4 mr-1.5" }), "Download Report"]
			})] })
		}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "Loading result…"
		}) : !interview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "No interview result found."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-8 flex flex-wrap items-center gap-8",
				style: { background: "var(--gradient-hero)" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreRing, {
					value: result.overall,
					label: "Overall",
					size: 140
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 min-w-50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-bold",
						children: "Great performance!"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground mt-1",
						children: "You scored above 80% of candidates for this role."
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						l: "Technical",
						v: result.technical
					},
					{
						l: "Communication",
						v: result.communication
					},
					{
						l: "Confidence",
						v: result.confidence
					},
					{
						l: "Problem Solving",
						v: result.problemSolving
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5 flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreRing, {
						value: s.v,
						size: 56
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: s.l
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl font-bold",
						children: s.v
					})] })]
				}, s.l))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
						className: "font-semibold flex items-center gap-1.5 text-success mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }), "Strengths"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "text-sm text-muted-foreground space-y-1 list-disc pl-5",
						children: result.strengths.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: s }, s))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
						className: "font-semibold flex items-center gap-1.5 text-warning mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4" }), "Areas to Improve"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "text-sm text-muted-foreground space-y-1 list-disc pl-5",
						children: result.improvements.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: s }, s))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-semibold mb-4",
					children: "Interview Timeline"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: [
						"Interview started",
						"Technical questions",
						"Behavioral questions",
						"Interview completed"
					].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid place-items-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs shrink-0",
							children: i + 1
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: s
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: `00:${(i * 8).toString().padStart(2, "0")}`
						})] })]
					}, i))
				})]
			})
		] })]
	});
}
function CandProfile() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "My Profile",
			description: "Keep your profile up to date"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
			onSubmit: (e) => {
				e.preventDefault();
				toast.success("Profile saved");
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-6 sm:p-8 space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
							className: "h-20 w-20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { children: "ME" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							className: "rounded-xl",
							children: "Upload Photo"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Resume" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "outline",
						className: "mt-1.5 w-full rounded-xl",
						children: "Upload Resume (PDF)"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Full name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								defaultValue: "Ava Chen",
								className: "mt-1.5 rounded-xl"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Email" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "email",
								defaultValue: "ava@mail.com",
								className: "mt-1.5 rounded-xl"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Location" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								defaultValue: "San Francisco, CA",
								className: "mt-1.5 rounded-xl"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Headline" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								defaultValue: "Senior Frontend Engineer",
								className: "mt-1.5 rounded-xl"
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Education" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						rows: 3,
						defaultValue: "B.Sc. Computer Science — Stanford University",
						className: "mt-1.5 rounded-xl"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Experience" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						rows: 3,
						defaultValue: "5 years building web apps at Nova, Loop.",
						className: "mt-1.5 rounded-xl"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Projects" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						rows: 3,
						className: "mt-1.5 rounded-xl"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Skills" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						defaultValue: "React, TypeScript, Tailwind",
						className: "mt-1.5 rounded-xl"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Certifications" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { className: "mt-1.5 rounded-xl" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "LinkedIn" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { className: "mt-1.5 rounded-xl" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "GitHub" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { className: "mt-1.5 rounded-xl" })] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "rounded-xl",
							children: "Save Changes"
						})
					})
				]
			})
		})]
	});
}
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen grid place-items-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-7xl font-bold",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-6 rounded-xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						children: "Go home"
					})
				})
			]
		})
	});
}
function App() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BrowserRouter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
		position: "top-right",
		richColors: true
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
		mode: "wait",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Routes, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Route, {
				element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketingLayout, {}),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landing, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/features",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/how-it-works",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/pricing",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/contact",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Route, {
				element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthLayout, {}),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/login",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Login, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/signup",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Signup, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/forgot-password",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Forgot, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/reset-password",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reset, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Route, {
				element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequireRole, {
					role: "company",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardLayout, { variant: "company" })
				}),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/company",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HrDashboard, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/company/jobs",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HrJobs, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/company/jobs/new",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HrJobCreate, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/company/jobs/:id",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HrJobDetail, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/company/jobs/:id/edit",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HrJobEdit, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/company/applicants",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HrApplicants, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/company/shortlisted",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HrShortlisted, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/company/interviews",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HrInterviews, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/company/reports",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HrReports, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/company/profile",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HrCompanyProfile, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/company/settings",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings_default, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Route, {
				element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequireRole, {
					role: "candidate",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardLayout, { variant: "candidate" })
				}),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/candidate",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CandDashboard, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/candidate/jobs",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CandBrowse, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/candidate/jobs/:id",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CandJobDetails, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/candidate/jobs/:id/apply",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CandApply, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/candidate/applied",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CandApplied, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/candidate/interviews",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CandUpcoming, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/candidate/interviews/history",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CandHistory, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/candidate/interviews/:id/room",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CandInterviewRoom, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/candidate/interviews/:id/result",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CandResult, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/candidate/profile",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CandProfile, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/candidate/settings",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsPage, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
				path: "*",
				element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotFound, {})
			})
		] })
	})] }) }) });
}
function ClientApp() {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setMounted(true), []);
	if (!mounted) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-background flex items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(App, {});
}
//#endregion
export { ClientApp as t };
