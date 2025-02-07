import User from "../models/User.Module.js";
import jwt from "jsonwebtoken";

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
                let id = value[0].id;
                let token = jwt.sign({ id: id }, "email");
                res.cookie("token", token) // Sign - In
                return res.redirect("/user");
            }
            return res.render("User/signIn.ejs");
        })
        .catch(() => {
            return res.render("User/signIn.ejs");
        });
};


export const completeTask = (req, res) => {
    let { id } = jwt.verify(req.cookies.token, "email");
    user.completetask(id)
        .then((value) => {
            return res.render("User/CompleteTask.ejs", { data: value });
        })
        .catch(() => {
            return res.status(401).json({ msg: "Some Issue" });
        });
}

export const MytaskView = (req, res) => {
    let { id } = jwt.verify(req.cookies.token, "email");
    user.pendingtask(id)
        .then((value) => {
            return res.render("User/AllShowTask.ejs", { data: value });
        })
        .catch(() => {
            return res.status(401).json({ msg: "Some Issue" });
        });
}

export const CompletedSet = (req, res) => {
    let id = req.params.id;
    user.statusChange(id)
        .then(() => {
            return res.redirect("/user/my-task");
        })
        .catch(() => {
            return res.status(401).json({ msg: "Some Issue" });
        });
}