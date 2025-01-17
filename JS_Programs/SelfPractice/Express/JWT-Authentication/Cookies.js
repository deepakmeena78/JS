const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

app.use(cookieParser());

app.get("/", (req, res) => {
    res.cookie("first", "Meena JI");
    res.send("Done");
});

app.get("/read", (req, res) => {
    console.log(req.cookies);
    res.send("Read Page");
});

app.listen(2100, () => {
    console.log("Server Is Started");
});