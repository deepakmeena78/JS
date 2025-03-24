import bcrypt from "bcryptjs";
import Constomer from "../../module/Customer.module.js";
import { validationResult } from "express-validator";
import { Helpers } from "../../Helpers/Helper.js";
import { Templete } from "../../Utils/templete.js";
import { Token } from "../../Utils/jwt.auth.js";


export const SignUp = async (req, res) => {
    try {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let { name, email, password, mobile, location, pincode } = req.body;
            const salky = bcrypt.genSaltSync(10);
            password = bcrypt.hashSync(password, salky);
            const helper = new Helpers();
            const otp = helper.generateOtp(4);
            const result = await Constomer.create({ name, email, password, mobile, location, pincode, otp });
            let data = {
                otp: result.dataValues.otp,
                year: new Date().getFullYear(),
                appName: process.env.APP_NAME,
                name: result.dataValues.name,
                email: result.dataValues.email,
                subject: "Send OTP Jaldi ",
            };
            const templatedata = new Templete().getOtpTemplete(data);
            helper.sendMail(data, templatedata);
            return res.status(200).json({ msg: "Successfull", user: result.dataValues });
        }
    } catch (error) {
        return res.status(500).json({ msg: "ERROR SIGN-UP", err });
    }
}

export const verifyOtp = async (req, res) => {
    try {
        const { email, otp } = req.body;
        let result = await Constomer.findOne({ raw: true, where: { email } });
        if (result) {
            let OTP = result.otp;
            if (otp === OTP) {
                let token = new Token();
                let tokenObj = {
                    id: result.id,
                    name: result.name,
                    email: result.email,
                    mobile: result.mobile,
                }
                let data = token.tokenGanrate(tokenObj);
                res.cookie("costomer", data);
                return res.status(200).json({ msg: "Verify Successfully : " });
            }
            return res.status(401).json({ msg: "WRONG OTP" });
        }
        return res.status(401).json({ msg: "Email Not Found" });
    } catch (error) {
        return res.status(500).json({ msg: "ERROR OTP Verify" });
    }
}


export const SignIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await Constomer.findOne({ raw: true, where: { email } });
        if (result) {
            let hashpassword = result.password;
            let status = bcrypt.compareSync(password, hashpassword);
            if (status) {
                let token = new Token();
                let tokenObj = {
                    id: result.id,
                    name: result.name,
                    email: result.email,
                    mobile: result.mobile,
                }
                let data = token.tokenGanrate(tokenObj);
                res.cookie("costomer", data);
                return res.status(200).json({ msg: "Sign-In Successfully : " });
            }
            return res.status(401).json({ msg: "Invalid Password" });
        } else {
            return res.status(401).json({ msg: "invalid Email" });
        }
    } catch (error) {
        return res.status(500).json({ msg: "ERROR SIGN-IN ", error });
    }
}


export const ForgatePassword = async (req, res) => {
    try {
        let { email } = req.body;
        const result = await Constomer.findOne({ where: { email } });
        if (!result) {
            return res.status(404).json({ msg: "Admin not found" });
        }
        const helper = new Helpers();
        const otp = helper.generateOtp(4);
        await result.update({ otp });
        let data = {
            otp: otp,
            year: new Date().getFullYear(),
            appName: process.env.APP_NAME,
            name: result.name,
            email: result.email,
            subject: "Send OTP Jaldi Bhejo Yaar",
        };
        const templatedata = new Templete().forgatePassword(data);
        helper.sendMail(data, templatedata);
        return res.status(200).json({ msg: "Successfull", user: result.dataValues });
    } catch (error) {
        return res.status(500).json({ msg: "ERROR Forgate Password : " });
    }
}


export const ChangePassword = async (req, res) => {
    try {
        let { email, newpassword, confirm_password } = req.body;
        if (newpassword === confirm_password) {
            const result = await Constomer.findOne({ where: { email } });
            if (!result) {
                return res.status(404).json({ msg: "Email not found" });
            }
            await result.update({ newpassword });
            return res.status(200).json({ msg: "Successfull Password Change", user: result.dataValues });
        }
    } catch (error) {
        return res.status(500).json({ msg: "ERROR Change Password : " });
    }
}