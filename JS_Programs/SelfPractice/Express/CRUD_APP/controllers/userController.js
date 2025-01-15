const e = require("express");
const User = require("../models/userModel");

// const userdata = new User(req.body);
// userdata.save();
const create = async (req, res) => {
    try {
        const userData = new User(req.body);
        if (!userData) {
            return res.status(404).json({ msg: "User Data not Found " })
        }
        const saveData = await userData.save();
        res.status(200).json(saveData);
    } catch (error) {
        res.status(500).json({ ERROR: error });
    }
}

const getAll = async (req, res) => {
    try {
        const userData = await User.find();
        if (!userData) {
            return res.status(404).json({ mgs: "User Data not Find" });
        }
        res.status(200).json(userData)
    } catch (error) {
        res.status(500).json({ errror: error });
    }
}

const getOne = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(404).json({ msg: "User Data Not Found" })
        }
        else {
            res.status(200).json(userExist);
        }
    } catch (error) {
        res.status(500).json({ ERROR: error });
    }
}

const update = async (req, res) => {
    try {
        const id = req.params.id;
        const userExit = await User.findById(id);
        if (!userExit) {
            return res.status(401).json({ msg: "User Not Found" });
        }
        const updateData = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updateData)
    } catch (error) {
        res.status(500).json({ eroor: error });
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExit = await User.findById(id);
        if (!userExit) {
            return res.status(404).json({ msg: "User not Found" });
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({ msg: "User Deleted Successfuly" });
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

module.exports = {
    create,
    getAll,
    getOne,
    update,
    deleteUser
};