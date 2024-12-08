const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Home");
});

app.get("/1", (req, res) => {
    res.send("First");
});

app.get("/2", (req, res) => {
    res.send("Second");
});

app.listen(2000, () => {
    console.log("Good Yaar");
});
