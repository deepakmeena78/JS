import express from "express";
const route = express.Router();
import { Category } from "../../controller/Backend/Category.Controller.js";

route.post("/category", Category);

export default route;
