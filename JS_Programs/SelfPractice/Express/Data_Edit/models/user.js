const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:12707/Meenaji");

const userSchema = mongoose.Schema({
    image: String,
    email: String,
    name: String
});

module.exports = mongoose.model("user", userSchema);