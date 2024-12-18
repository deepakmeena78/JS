const cookiesParse = require();
const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(Path2D.join(__dirname, "public")))

app.get("/", function (req, res) {
    res.send("Welcome");
});

app.listen(3000, function () {
    console.log("Successfully");
});