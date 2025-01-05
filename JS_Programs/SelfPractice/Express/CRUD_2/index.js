const express = require("express");
const app = express();
const user = require("./database");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
    const users = await user.find({});
    res.render("index", {
        title: "YO YO Honey Singh",
        users: users,
    });
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = new user({ name, email, password });
    await newUser.save();
    res.redirect("/");
});

app.get("/edit/:id", async (req, res) => {
    const { id } = req.params;
    const useredit = await user.findById({ _id: id });
    if (!useredit) {
        res.redirect("/");
    } else {
        res.render("edit", { user: useredit });
    }
});

app.post("update/:id", async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const updateuser = await user.findByIdAndUpdate({ _id: id }, { name, email, password }, { new: true });
    res.redirect("/");
});

app.get("/delete/:id", async (req, res) => {
    const { id } = req.params;
    const deleteuser = await user.findByIdAndDelete({ _id: id });
    res.redirect("/");
});

app.listen(3100, () => {
    console.log("Server is started on http://localhost:3100");
});
