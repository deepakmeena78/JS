import { validationResult } from "express-validator";
import User from "../model/userModel.js";
import bcrypt from "bcrypt";

export const signUp = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(401).json({ error: errors.array() });
        }
        let reault = await User.create(req.body);
        return res.status(200).json({ msg: "User Created", user: reault });
    } catch (error) {
        console.log("ERROR", error);
        return res.status(401).json({ err: "InterNal Server Error" });
    }
}


export const signIn = async (req, res, next) => {
    let { email, password } = req.body;
    let user = await User.findOne({ where: { email }, raw: true });
    if (user) {
        let dbPassword = user.password;
        let status = await bcrypt.compare(password, dbPassword);
        return status ? res.status(200).json({ msg: "SignIn Successfully", user }) : res.status(401).json({ msg: "Not User Exist" });
    }
    return res.status(401).json({ msg: "Not Usre " });
}


