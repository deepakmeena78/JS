import express from "express";
import { signUp, signUpPage } from "../controller/admin.controller.js";

const router = express.Router();

router.post("/sign-up", signUp);
router.get("/sign-up", signUpPage);

export default router;
