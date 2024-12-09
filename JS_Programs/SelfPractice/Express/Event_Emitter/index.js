const express = require("express");
const app = express();
const EvetEmitter = require("events");
const event = new EvetEmitter();

event.on("1", () => {
    console.log("First Called");
});

event.on("2", () => {
    console.log("Second Called");
});

app.get("/", (req, res) => {
    res.send("Meena JI");
    event.emit("1");
});

app.get("/1", (req, res) => {
    res.send("First Meena JI");
    event.emit("2");
});

app.get("/2", (req, res) => {
    res.send("Second Meena JI");
});

app.listen(3000, () => {
    console.log("Successs Full");
});