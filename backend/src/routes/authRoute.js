import express from "express";
import {
  refreshToken,
  signIn,
  signOut,
  signUp,
  getMe,
} from "../controllers/authController.js";
import { protectedRoute } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/signout", signOut);
router.post("/refresh", refreshToken);
router.get("/me", protectedRoute, getMe);

export default router;
