let ID = 0;
import User from "../models/User.Module.js";
import fs from "fs";
let user = new User();

export const Home = (req, res) => {
    return res.render("User/HomePage.ejs");
}

export const signUpPage = (req, res) => {
    user.getRole()
        .then((value) => {
            return res.render("User/signUp.ejs", { data: value });
        })
        .catch(() => {
            return res.render("User/Error.ejs");
        });
}

export const signUp = (req, res) => {
    const { name, email, password, role } = req.body;
    user.signUp(name, email, password, role)
        .then(() => {
            return res.redirect("/user/sign-in");
        })
        .catch(() => {
            return res.render("User/signUp.ejs");
        })
}


export const SignInPage = (req, res) => {
    return res.render("User/signIn.ejs");
}

export const SignIn = (req, res) => {
    const { email, password } = req.body;
    user.signin(email, password)
        .then((value) => {
            if (value.length !== 0) {
                ID = value[0].id;
                fs.appendFileSync("id.txt", `${id}\n`, 'utf-8'); // Sign - In
                return res.redirect("/user");
            }
            return res.render("User/signIn.ejs");
        })
        .catch(() => {
            return res.render("User/signIn.ejs");
        });
};


export const completeTask = (req, res) => {
    const ID = fs.readFileSync(filePath, 'utf-8');
    user.completetask(ID)
        .then((value) => {
            return res.render("User/CompleteTask.ejs", { data: value });
        })
        .catch(() => {
            return res.status(401).json({ msg: "Some Issue" });
        });
}