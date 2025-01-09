const express = require("express");
const mongoose = require("mongoose");
const userModel = require("./models/user");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", async (req, res) => {
    const showdata = await userModel.find({});
    res.render("index", { userModel: showdata });
});

app.get("/create", (req, res) => {
    res.render("create");
});

app.post("/create", async (req, res) => {
    const { name, email, password } = req.body;
    const createuser = new userModel({ name, email, password });
    await createuser.save();
    res.redirect("/");
});

app.get("/edit/:id", async (req, res) => {
    const { id } = req.params;
    const edituser = await userModel.findById({ _id: id });
    if (!edituser) {
        res.redirect("/");
    }
    else {
        res.render("edit", { userModel: edituser });
    }
});

app.post("/update/:id", async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const updateuser = await userModel.findByIdAndUpdate({ _id: id }, { name, email, password }, { new: true });
    res.redirect("/");
});

app.get("/delete/:id", async (req, res) => {
    const { id } = req.params;
    const deleteuser = await userModel.findByIdAndDelete({ _id: id });
    res.redirect("/");
});

app.listen(3200, () => {
    console.log("Server Started");
});
