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
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(["company", "candidate"]),
});

router.post(
  "/signup",
  asyncHandler(async (req, res) => {
    const data = signupSchema.parse(req.body);
    const exists = await User.findOne({ email: data.email });
    if (exists) return res.status(409).json({ message: "Email already registered" });
    const user = await User.create(data);
    res.status(201).json({ token: signToken(user), user: user.toSafeJSON() });
  }),
);

const loginSchema = z.object({ email: z.string().email(), password: z.string().min(1) });

router.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = loginSchema.parse(req.body);
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password)))
      return res.status(401).json({ message: "Invalid credentials" });
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