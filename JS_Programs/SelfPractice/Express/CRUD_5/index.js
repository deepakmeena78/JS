const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userDAta = require("./models/user");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", async (req, res) => {
    const showuser = await userDAta.find({});
    res.render("index", { userDAta: showuser });
});

app.get("/create", (req, res) => {
    res.render("create");
});

app.post("/create", async (req, res) => {
    const { name, email, password } = req.body;
    const createuser = new userDAta({ name, email, password });
    await createuser.save();
    res.redirect("/");
});

app.get("/edit/:id", async (req, res) => {
    const { id } = req.params;
    const edituser = await userDAta.findById({ _id: id });
    if (!edituser) {
        res.redirect("/");
    } else {
        res.render("edit", { userDAta: edituser });
    }
});

app.post("/update/:id", async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const upadteuser = await userDAta.findByIdAndUpdate({ _id: id }, { name, email, password }, { new: true });
    res.redirect("/");
});

app.get("/delete/:id", async (req, res) => {
    const { id } = req.params;
    const deleteuser = await userDAta.findByIdAndDelete({ _id: id });
    res.redirect("/");
});

app.listen(3300, () => {
    console.log("Server Started");
});
