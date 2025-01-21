import express from "express";
import { signIn, signUp } from "../controllers/userControllers.js";
const route = express.Router();

route.post("signin", signIn);
route.post("signup", signUp);

export default route;