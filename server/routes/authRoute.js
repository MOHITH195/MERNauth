import express from "express";
import { Router } from "express";
import cors from "cors";
import {test,registeruser,loginuser,profile} from "../controllers/authController.js";
// import {loginuser} from "../controllers/authController.js";

const router = Router();

// router.use(cors({
//     credentials: true,
//     origin: "http://localhost:5173"
// }));


const allowedOrigins = ['http://localhost:5173', 'http://localhost:3000'];

router.use(cors({
  credentials: true,
  origin: allowedOrigins,   
}));

router.get("/", test);
router.post("/register", registeruser);
router.post("/login", loginuser);
router.get("/profile", profile);
// router.post('/logout', (req, res) => {
//     res.clearCookie('token');
//     res.json({ message: 'Logout successful' });
// });

export default router;