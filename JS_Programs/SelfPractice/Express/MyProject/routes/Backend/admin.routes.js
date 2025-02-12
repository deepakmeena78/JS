import express from "express";
import { SignUp, verifyOtp, SignIn } from "../../controller/Backend/Admin.Controller.js";
const route = express.Router();
import { body } from "express-validator";

route.post(
    "/sign-up",
    body("name", "Name is required.").notEmpty(),
    body("email", "Invalid email address.").isEmail(),               //  Sign-Up
    body("password", "Password Is Required").isLength({ min: 6, max: 8 }),
    SignUp
);

route.post("/verify", verifyOtp);                                   // OTP Verify

route.post("/sign-in",
    body("email", "Invalid email address.").isEmail(),              // Sign-in
    body("password", "Password Is Required").isLength({ min: 6, max: 8 }),
    SignIn);

export default route;