const { name } = require("ejs");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/CRUD_5")
    .then(() => {
        console.log("DataBase Connected");
    })
    .catch((er) => {
        console.log("Error : ", er);
    });

const userDAta = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Usre", userDAta);