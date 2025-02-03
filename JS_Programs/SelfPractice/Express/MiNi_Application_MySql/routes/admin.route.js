import express from "express";
import { HomePage, signUp, signUpPage, SignIn, signInPage, Task, taskComplete } from "../controller/admin.controller.js";

const router = express.Router();

router.get("/", HomePage);             // Home Page
router.post("/sign-up", signUp);       // Sign-Up Page
router.get("/sign-up", signUpPage);    // Sign-Up To DataBase
router.get("/sign-in", SignIn);         // Sign-In Page
router.post("/sign-in", signInPage);    // Sign-In to DataBase
router.get("/task", Task);              // Pending Task
router.get("/task-complete/:id", taskComplete);   // Status Check and Update

export default router;
