const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const cookieParse = require("cookie-parser");
app.use(cookieParse());

app.get("/", function (req, res) {
    let token = jwt.sign({ email: "olomerabhola@gmail.com" }, "secret")
    res.cookie("token", token);
    res.send("Done");
    console.log(token);
});

// app.get("/1", function (req, res) {
// res.send("Second Page");
//     console.log(req.cookies.token);
// })

app.get("/2", function (req, res) {
    let data = jwt.verify(req.cookies.token, "secret");
    res.send("Second Page");
    console.log(data);
})

app.listen(3000, function () {
    console.log("Successfully");
})