const path = require("path");
const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views",path.resolve('./views'));

app.listen(PORT, () => {
    console.log("Server Started");
});