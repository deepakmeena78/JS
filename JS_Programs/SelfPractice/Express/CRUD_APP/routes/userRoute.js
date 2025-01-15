const express = require("express");
const { create, getAll, getOne, update, deleteUser } = require("../controllers/userController");
const route = express.Router();

route.post("/create", create);
route.get("/getall", getAll);
route.get("/getone/:id", getOne);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteUser);
module.exports = route;