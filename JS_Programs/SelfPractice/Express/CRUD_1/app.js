const express = require("express");
const path = require("path");
const app = express();

const userModel = require("./models/user");
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/", async (req, res) => {
    try {
        let { name, email, image } = req.body;
        let adduser = await userModel.create({
            name,
            email,
            image
        });
        res.send(adduser)
    } catch (error) {
        res.status(500)({ error: "Wrong Code" });
    }
});

// app.get("/create", (req, res) => {
//     res.render("index2");
// });

// app.post("/create", async (req, res) => {
//     try {
//         let { name, email, image } = req.body;
//         let createUser = await userModel.create({
//             name,
//             email,
//             image
//         });
//         res.send(createUser);
//     } catch (error) {
//         console.error("Error creating user:", error);
//         res.status(500).send({ error: "Failed to create user" });
//     }
// });

app.listen(3000, () => {
    console.log("Server running successfully on http://localhost:3000");
});
