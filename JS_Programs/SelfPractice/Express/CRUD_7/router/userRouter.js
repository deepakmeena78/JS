import express from "express";
const router = express.Router();

import {signIn , signInAction} from "../controllers/userController.js";

router.post("/signin",signInAction);
router.get("/" , signIn)
export default router;