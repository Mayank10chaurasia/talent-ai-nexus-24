import { Router } from "express";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import { z } from "zod";
import { User } from "../models/User.js";
import { protect } from "../middleware/auth.js";

const router = Router();

const signToken = (user) =>
  jwt.sign({ sub: user._id.toString(), role: user.role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });

const signupSchema = z.object({
  username: z.string().trim().min(3).optional(),
  name: z.string().trim().min(1),
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(["company", "candidate"]),
});

const buildUsername = (value, fallbackName) => {
  const base = (value || fallbackName || "user")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[^a-z0-9]/g, "");
  return base || `user${Math.floor(Math.random() * 100000)}`;
};

router.post(
  "/signup",
  asyncHandler(async (req, res) => {
    const data = signupSchema.parse(req.body);
    const username = buildUsername(data.username, data.name);

    const emailExists = await User.findOne({ email: data.email });
    if (emailExists) return res.status(409).json({ message: "Email already registered" });

    const usernameExists = await User.findOne({ username });
    if (usernameExists) return res.status(409).json({ message: "Username already taken" });

    const user = await User.create({ ...data, username });
    res.status(201).json({ token: signToken(user), user: user.toSafeJSON() });
  }),
);

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

router.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = loginSchema.parse(req.body);
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.json({ token: signToken(user), user: user.toSafeJSON() });
  }),
);

router.get(
  "/me",
  protect,
  asyncHandler(async (req, res) => {
    res.json({ user: req.user });
  }),
);

router.post("/forgot", (_req, res) => res.json({ ok: true }));
router.post("/reset", (_req, res) => res.json({ ok: true }));

export default router;
