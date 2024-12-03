const express = require('express');

const app = express();

app.get("/", (req, res) => {
    return res.send("Hello From Home Page");
});

app.get("/1", (req, res) => {
    return res.send("Welcome To Page 1");
});

app.get("/2", (req, res) => {
    return res.send("Welcome TO Page 2");
});

app.listen(2200, () => {
    console.log("Complete");
});
