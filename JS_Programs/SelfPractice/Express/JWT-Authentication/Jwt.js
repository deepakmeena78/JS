const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.use(cookieParser());

app.get("/", (req, res) => {
    let token = jwt.sign({ email: "dm2000353@gmail.com" }, "main");
    res.cookie("key", token);
    res.send("Done");
});

app.get("/read", (req, res) => {
    let data = jwt.verify(req.cookies.key, "main");
    console.log(data);
});

app.listen(2300, () => {
    console.log("Server Is Started");
});