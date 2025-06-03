import express from "express";
import { UserCreate,SignIn,UserUpdate ,UserGet,UserDelete} from "../controller/user.controller.js";
const route = express.Router();

route.post("/create", UserCreate);
route.post("/sign-in", SignIn);
route.put("/update/:id", UserUpdate);
route.get("/get-user/:id",UserGet)
route.delete("/delete/:id",UserDelete)

export default route;