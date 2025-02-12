import express from "express";
import { SignUp, verifyOtp, SignIn } from "../../controller/Backend/Admin.Controller.js";
const route = express.Router();

route.post("/sign-up", SignUp);                                      // Sign-Up

route.post("/verify", verifyOtp);                                   // OTP Verify

route.post("/sign-in", SignIn);                                      // Sign-in

export default route;