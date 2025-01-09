const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/CRUD_3")
    .then(() => {
        console.log("DataBase Is Connected");
    })
    .catch((err) => {
        console.log("Error : ", err);
    });

const userSchema = new mongoose.Schema({
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

module.exports = mongoose.model("User", userSchema);