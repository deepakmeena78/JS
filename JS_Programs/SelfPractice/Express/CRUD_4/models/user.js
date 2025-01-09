const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/CRUD_4")
    .then(() => {
        console.log("Data Base Connection Successfully");
    })
    .catch((err) => {
        console.log("Error : ", err);
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

module.exports = mongoose.model("User", userModel);