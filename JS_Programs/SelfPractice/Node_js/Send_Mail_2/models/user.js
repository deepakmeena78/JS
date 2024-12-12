const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Self");
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    age: String,
});

const user = mongoose.model("User", userSchema);
exports.model = user; 