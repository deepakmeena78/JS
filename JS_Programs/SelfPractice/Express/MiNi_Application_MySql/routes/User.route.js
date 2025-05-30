import express from "express";
const route = express.Router();
import { Home, signUpPage, signUp, SignInPage, SignIn, completeTask, MytaskView, CompletedSet } from "../controller/User.Controller.js";


route.get("/", Home);                    // Home Page
route.get("/sign-up", signUpPage);       // Sign-Up Page Render
route.post("/sign-up", signUp);          // Sign-Up To DataBase
route.get("/sign-in", SignInPage);       // Sign-in Page Render
route.post("/sign-in", SignIn);          // Sign-in to DataBase
route.get("/complete-task", completeTask);// complete Task Show
route.get("/my-task", MytaskView);       // View My Task 
route.get("/complete-set/:id", CompletedSet); //  Complete Do
// route.get("/signout", signOut);           // Log-Out

export default route;