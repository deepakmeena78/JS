const express = require("express");
const app = express();
const path = require('path');
const data = require("./models/user");

app.set(express.json());
app.set(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/i", (req, res) => {
  res.render("index2");
});

app.post("/i", async (req, res) => {
  try {
    let { name, email, age } = req.body;

    if (!name || !email || !age) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    let createUser = await data.i({
      name,
      email,
      age,
    });
    res.status(200).json({
      message: "User created successfully",
      user: createUser
    });
  } catch (error) {
    console.log("Are Yaar : ", error);
  }
});

app.listen(3000, () => {
  console.log("Successful");
});