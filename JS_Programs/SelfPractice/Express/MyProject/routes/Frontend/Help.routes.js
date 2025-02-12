import express from "express";
const route = express.Router();
import { CreateHelp } from "../../controller/Frontend/Help.Controller.js";

route.post("/create-help", CreateHelp);

export default route;