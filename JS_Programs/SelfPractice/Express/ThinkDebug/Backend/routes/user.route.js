import express from "express";
const route = express.Router();
import { createUser, GetUser, UpdateUser, DeleteUser, SignIn } from "../controller/user.controller.js";

route.post("/create", createUser);
route.get("/get/:id", GetUser);
route.put("/update/:id", UpdateUser);
route.delete("/delete/:id", DeleteUser);
route.post("/sign-in", SignIn);

export default route;