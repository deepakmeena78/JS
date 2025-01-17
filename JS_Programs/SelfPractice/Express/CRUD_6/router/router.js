const express = require("express");
const route = express.Router();

const { signUp, signIn, Login, userDelete, Update } = require("../controllers/controllers");

route.post("/signup", signUp);
route.post("/signin", signIn);
route.post("/login", Login);
route.post("/delete", userDelete);
route.post("/update", Update);

module.exports = route;