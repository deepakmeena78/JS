const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./router/router");
const bodyParser = require("body-parser");
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/CRUD_6")
    .then((result) => {
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.use("/user", userRouter)

        app.listen(2150, () => {
            console.log("Server Started");
        });
    })
    .catch((err) => {
        console.log("Error: ", err);
    });