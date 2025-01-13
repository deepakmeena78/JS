const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Data");
});

app.post("/create",(req,res)=>{
    co
});

app.listen(2100, () => {
    console.log("Server Started");
});