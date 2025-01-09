const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/CRUD_1")
    .then(() => {
        console.log("DataBase Connected ");
    })
    .catch((err) => {
        console.log(arr);
    });

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);