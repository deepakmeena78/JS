import bcrypt from "bcryptjs";
import Admin from "../../module/admin.module.js";
import { validationResult } from "express-validator";
import { Helpers } from "../../Helpers/Helper.js";
import { Templete } from "../../Utils/templete.js";
import { Token } from "../../Utils/jwt.auth.js";


export const SignUp = async (req, res) => {
    try {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let { name, email, password, mobile } = req.body;
            const salky = bcrypt.genSaltSync(10);
            password = bcrypt.hashSync(password, salky);
            const helper = new Helpers();
            const otp = helper.generateOtp(4);
            const result = await Admin.create({ name, email, password, mobile, otp });
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
            return res.status(200).json({ msg: "Sign Up Successfull", user: result.dataValues });
        }
    } catch (error) {
        return res.status(500).json({ msg: "ERROR SIGN-UP", error });
    }
}

export const verifyOtp = async (req, res) => {
    try {
        const { email, otp } = req.body;
        let result = await Admin.findOne({ where: { email } });
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
                res.cookie("admin", data);
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
        const result = await Admin.findOne({ raw: true, where: { email } });
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
                res.cookie("token", data);
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
