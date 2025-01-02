// const express = require("express");
// const app = express();

// const userModel = require("./router/usermodel");
// const { model } = require("mongoose");
// app.get("/", (req, res) => {
//     res.send("Meena JI ");
// });

// app.get("/create", async (req, res) => {
//     let createUser = await userModel.create({
//         name: "Ankit",
//         email: "dm2000353@gmail.com",
//         username: "Akki"
//     });
//     res.send(createUser);
// });

// app.get("/update", async (req, res) => {
//     let updateUser = await userModel.findOneAndUpdate({ username: "Akki" }, { name: "Deepak" }, { new: true });
//     res.send(updateUser);
// });

// app.get("/read", async (req, res) => {
//     let readUser = await userModel.find();
//     res.send(readUser);
// });

// app.listen(3100, () => {
//     console.log("SuccessFully Run : ");
// });

//-------------------------------------------------------

const express = require("express");
const path = require("path");
const userModel = require("./models/user");
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/read", (req, res) => {
    res.render("read");
});

app.post("/create", (req, res) => {
    let { name, email, imageurl } = req.body;
    res.render("index");
});

app.listen(3100, () => {
    console.log("Sussec Run");
});
