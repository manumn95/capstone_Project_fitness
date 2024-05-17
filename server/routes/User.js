import express from "express";
import {
  UserLogin,
  UserRegister,
  addWorkout,
  getUserDashboard,
  getWorkoutsByDate,
} from "../controllers/User.js";

import cors from "cors";

import { verifyToken } from "../middleware/verifyToken.js";
import cors from "cors";




const app = express();
app.use(cors())
app.post("/signup", UserRegister);
app.post("/signin", UserLogin);

app.get("/dashboard", verifyToken, getUserDashboard);
app.get("/workout", verifyToken, getWorkoutsByDate);
app.post("/workout", verifyToken, addWorkout);

export default router;
