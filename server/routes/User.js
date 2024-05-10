import express from "express";
import {
  UserLogin,
  UserRegister,
  addWorkout,
  getUserDashboard,
  getWorkoutsByDate,
} from "../controllers/User.js";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
import { verifyToken } from "../middleware/verifyToken.js";
import cors from "cors";




const router = express.Router();
router.use(cors());
router.post("/signup", UserRegister);
router.post("/signin", UserLogin);

router.get("/dashboard", verifyToken, getUserDashboard);
router.get("/workout", verifyToken, getWorkoutsByDate);
router.post("/workout", verifyToken, addWorkout);

export default router;
