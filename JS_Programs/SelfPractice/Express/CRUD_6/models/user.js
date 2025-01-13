const mongoose = require("mongoose");
const { type } = require("os");
mongoose.connect("mongodb://127.0.0.1:27017/CRUD_6")
    .then(() => {
        console.log("DataBase Connected");
    })
    .catch((err) => {
        console.log("ERROR : ", err);
    });

const userModel = mongoose.Schema({
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

module.exports = module.userModel("User",userModel);