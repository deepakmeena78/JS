import express from "express";
const route = express.Router();
import { createUser, UpdateUser, GetUser, DeleteUser } from "../controller/user.controller.js"

route.post("/create", createUser);
route.post("/update/:id", UpdateUser);
route.get("/get/:id", GetUser);
route.delete("/delete/:id", DeleteUser);

export default route;