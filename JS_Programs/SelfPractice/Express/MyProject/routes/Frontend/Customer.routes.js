import express from "express";
import { SignUp, verifyOtp, SignIn, ForgatePassword, ChangePassword } from "../../controller/Frontend/Customer.controller.js"
const route = express.Router();
import { body } from "express-validator";

route.post(
    "/sign-up",
    body("name", "Name is required.").notEmpty(),
    body("email", "Invalid email address.").isEmail(),               //  Sign-Up
    body("password", "Password Is Required").isLength({ min: 6, max: 8 }),
    body("location", "Location is required.").notEmpty(),
    body("pincode", "Pincode must be 6 digits.").notEmpty().isLength({ min: 6, max: 6 }),
    SignUp
);

route.post("/verify", verifyOtp);                                   // OTP Verify
export default route;

route.post("/sign-in",
    body("email", "Invalid email address.").isEmail(),              // Sign-in
    body("password", "Password Is Required").isLength({ min: 6, max: 8 }),
    SignIn);

route.post("/forgate-password",
    body("email", "Invalid email address.").isEmail(),            // Forgate Password
    ForgatePassword);

route.post("/change-password", ChangePassword);                  // Password Change