import express from "express";
const app = express();
import mongoose from "mongoose";
import route from "./router/userRouter.js";

mongoose.connect("mongodb://localhost:27017/CRUD_7")
    .then(() => {
        app.set("view engine", "ejs");
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));

        app.use("/", route);

        app.listen(4500, () => {
            console.log("Server Started");
        });
    })
    .catch((err) => {
        console.log("ERROR", err);
    });
