import User from "../module/user.module.js";
import bcrypt from "bcrypt";

export const UserCreate = async (req, res) => {
    try {
        let { name, email, password } = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hashpassword = bcrypt.hashSync(password, salt);
        const user = new User({ name, email, password: hashpassword });
        const result = await user.save();
        return res.status(200).json({ msg: "Signup Successful", result });
    } catch (error) {
        console.error("Signup Error:", error);
        return res.status(500).json({ msg: "ERROR SIGN-UP", error: error.message });
    }
}

export const SignIn = async (req, res) => {
    const { email, password } = req.body;
    const result = await User.findOne({ email });
    if (!result) {
        return res.status(404).json({ message: "User Not Found" });
    }
    const checkpassword = bcrypt.compareSync(password, result.password);
    if (!checkpassword) {
        return res.status(404).json({ message: "Wrong Password" });
    }
    return res.status(201).json({ message: "Sign In Succesfully", result });
}



export const UserUpdate = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, email, password } = req.body;

        const updateData = {};

        if (name) updateData.name = name;
        if (email) updateData.email = email;
        if (password) {
            const salt = bcrypt.genSaltSync(10);
            updateData.password = bcrypt.hashSync(password, salt);
        }

        const updatedUser = await User.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json({ message: "User profile updated", user: updatedUser });
    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const UserGet = async (req, res) => {
    try {
        const id = req.params.id;
        const getUser = await User.findById(id);
        if (!getUser) {
            return res.status(404).json({ message: "User Not Found" });
        }
        return res.status(201).json({ message: "successfully ", getUser });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export const UserDelete = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await User.findOneAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: "Use Not Found" });
        }
        return res.status(201).json({ message: "Successfully", result });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}