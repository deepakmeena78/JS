const { name } = require("ejs");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/CRUD_2")
    .then(() => {
        console.log("DataBase Connection is Successfully");
    })
    .catch((err) => {
        console.log(err, 'Error');
    });

const Schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const Usermodel = mongoose.model("User", Schema);
module.exports = Usermodel;