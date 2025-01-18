const { validationResult } = require("express-validator");
const User = require("../model/userModel");
const bcrypt = require("bcrypt");

const signIn = async (req, res, next) => {
    let { email, password } = req.body;
    let user = await User.findOne({ where: { email }, raw: true });
    if (user) {
        let dbPassword = user.password;
        let status = bcrypt.compareSync(password, dbPassword);
        return status ? res.status(200).json({ massage: "Sign In SuccessFull", user }) : res.status(401).json({ err: "Unauthorized user" });
    }
    return res.status(401).json({ err: "Unauthorized user" });
}

const signUp = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(401).json({ error: errors.array() });
        }
        let result = await User.create(req.body);
        return res.status(201).json({ message: "user created..." });

    } catch (error) {
        console.log("ERROR", error);
        return res.status(401).json({ err: "Internal Server Error..." });
    }
}

module.exports = {
    signIn,
    signUp
}