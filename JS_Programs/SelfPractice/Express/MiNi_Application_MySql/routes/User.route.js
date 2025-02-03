import express from "express";
const route = express.Router();
import { Home,signUpPage,signUp,SignIn } from "../controller/User.Controller.js";

route.get("/", Home);
route.get("/sign-up", signUpPage);
route.post("/sign-up", signUp);
route.get("/sign-in",SignIn);

export default route;