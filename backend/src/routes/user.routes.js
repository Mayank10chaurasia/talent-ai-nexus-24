import { Router } from "express";
import asyncHandler from "express-async-handler";
import { User } from "../models/User.js";
import { protect } from "../middleware/auth.js";

const router = Router();

router.get(
  "/me",
  protect,
  asyncHandler(async (req, res) => res.json(req.user)),
);

router.put(
  "/me",
  protect,
  asyncHandler(async (req, res) => {
    const disallow = ["password", "email", "role", "_id"];
    const patch = { ...req.body };
    disallow.forEach((k) => delete patch[k]);
    const user = await User.findByIdAndUpdate(req.user._id, patch, { new: true }).select("-password");
    res.json(user);
  }),
);

export default router;