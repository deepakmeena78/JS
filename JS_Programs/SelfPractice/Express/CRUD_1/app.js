const express = require("express");
const path = require("path");
const app = express();
const userModel = require("./models/user");
const e = require("express");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
    try {
        const showuser = await userModel.find({});
        res.render("index", { yo: showuser });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});


app.post("/", async (req, res) => {
    try {
        let { name, email, image } = req.body;
        let adduser = new userModel({ name, email, image });
        await adduser.save();
        res.redirect("/create");
    } catch (error) {
        res.send("Wrong Code");
    }
});

app.get("/create", (req, res) => {
    res.render("create");
});

app.post("/create", async (req, res) => {
    try {
        let { name, email, image } = req.body;
        let createUser = await userModel.create({ name, email, image });
        res.redirect("/");
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send({ error: "Failed to create user" });
    }
});

app.get("/edit/:id", async (req, res) => {
    const { id } = req.params;
    const editUser = await userModel.findById({ _id: id });
    res.render("edit", { yo: editUser });
});

app.post("/update/:id", async (req, res) => {
    const { id } = req.params;
    const { name, email, image } = req.body;
    const updateUser = await userModel.findByIdAndUpdate({ _id: id }, { name, email, image }, { new: true });
    res.redirect("/");
});

app.get("/delete/:id", async (req, res) => {
    const { id } = req.params;
    const deleteUser = await userModel.findByIdAndDelete({ _id: id });
    res.redirect("/");
});

app.listen(3120, () => {
    console.log("Server running successfully on http://localhost:3000");
});
