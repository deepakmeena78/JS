import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../module/user.module.js";


export const createUser = async (req, res) => {
    try {
        let { name, email, password } = req.body;

        const checkEmail = await User.findOne({ email });
        if (checkEmail) {
            return res.status(403).json({ message: "User Already Exist" });
        }
        const salt = bcrypt.genSaltSync(10);
        const hashpassword = bcrypt.hashSync(password, salt);
        const result = await User.create({ name, email, password: hashpassword });
        if (!result) {
            return res.status(404).json({ message: "User Not Created" });
        }
        return res.status(200).json({ message: "Created Successfully : ", result });
    } catch (error) {
        console.log("create User Error", error);
        return res.status(500).json({ message: "Internal Error Create User" });
    }
}

export const GetUser = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await User.findById(id);
        if (!result) {
            return res.status(404).json({ message: "User Not Found" });
        }
        return res.status(200).json({ message: "Profile : ", user: result });
    } catch (error) {
        console.log("Get User Error", error);
        return res.status(500).json({ message: "Internal Error Get User" });
    }
}


export const UpdateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, email, password } = req.body;
        const result = await User.findById(id);
        if (!result) {
            return res.status(404).json({ message: "User Not Found" });
        }
        const updated = await User.findByIdAndUpdate(id, { name, email, password }, { new: true });
        if (!updated) {
            return res.status(404).json({ message: "User Not Updated" });
        }
        return res.status(200).json({ message: "Updated User : ", user: updated });
    } catch (error) {
        console.log("Update User Error", error);
        return res.status(500).json({ message: "Internal Error Update User" });
    }
}


export const DeleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await User.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).json({ message: "User Not Deleted" });
        }
        return res.status(200).json({ message: "Delete User : ", user: deleted });
    } catch (error) {
        console.log("Delete User Error", error);
        return res.status(500).json({ message: "Internal Error Delete User" });
    }
}


export const SignIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "Wrong Email" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Wrong Password" });
        }
        const jwttokan = jwt.sign({ payload: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
        return res.status(200).json({ message: "SignIn Successfully : ", userData: user, token: jwttokan });
    } catch (error) {
        console.log("Signin User Error", error);
        return res.status(500).json({ message: "Internal Error SignIn User" });
    }
}