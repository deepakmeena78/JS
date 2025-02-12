const express = require("express");
const User = require("../model/model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const e = require("express");

const signUp = async (req, res, next) => {
    const { name, email, password } = req.body;
    console.log(req.body);
    try {
        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.status(400).json({ msg: "User already registered" });
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashPassword });
        await newUser.save();
        return res.status(201).json({ msg: "User registered successfully" });
    } catch (err) {
        console.log(err);
    }
};

const signIn = async (req, res, next) => {
    const { email, password } = req.body;
    console.log(req.body);
    try {
        const user = await User.findOne({ email });
        console.log(user);
        if (!user) {
            return res.status(400).json({ msg: "User not found" });
        }
        const matchData = await bcrypt.compare(password, user.password);
        if (matchData) {
            const token = jwt.sign({ id: user._id }, "your secret key", { expiresIn: "1h", });
            return res.status(200).json({ msg: "User SuccessFully Signed In ", token });
        } else {
            return res.status(400).json({ msg: "Incorrect password" });
        }
    } catch (error) {
        console.log("ERROR", error);
        return res.status(500).json({ msg: "Server error" });
    }
}

const Login = async (req, res, next) => {
    const id = req.body.id;
    console.log(req.body);
    try {
        const user = await User.findById(id);
        console.log(user);
        if (!user) {
            return res.status(500).json({ msg: "User Not Found" });
        }
        res.status(200).json({ user });
    } catch (error) {
        console.log("ERROR", error);
        res.status(500).json({ msg: "Error User Failed" });
    }
}

const userDelete = async (req, res, next) => {
    const id = req.body.id;
    console.log(id);
    try {
        const deleteu = await User.findById(id);
        console.log(deleteu);
        if (!deleteu) {
            res.status(500).json({ msg: "User Not Exist" });
        }
        res.status(200).json({ deleteu });
        RealyDelete = await User.findByIdAndDelete(id);
        console.log("Delete SuccessFully ");

    } catch (error) {
        console.log("ERROR", error);
        res.status(500).json({ msg: "Error Some Issue" });
    }
}

const Update = async (req, res, next) => {
    const { name, email, password ,id} = req.body;
    try {
        const finduser = await User.findById(id);
        console.log(finduser);
        if (!finduser) {
            res.status(500).json({ msg: "User Not Exist" });
        }

        finduser.name = name || finduser.name;
        finduser.email = email || finduser.email;
        finduser.password  = password || finduser.password;
        finduser.save();
        res.status(200).json(finduser);

    } catch (error) {
        console.log("ERRROR",error);
        res.status(500).json({mgs: "ERROR "});
    }
}

module.exports = {
    signUp,
    signIn,
    Login,
    userDelete
};