import User from "../models/User.Module.js";
let user = new User();

export const Home = (req, res) => {
    return res.render("User/HomePage.ejs");
}

export const signUpPage = (req, res) => {
    return res.render("User/signUp.ejs");
}

export const signUp = (req, res) => {
    const { name, email, password, role } = req.body;
    // let date = new Date();
    // date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    user.signUp(name, email, password, role)
        .then(() => {
            return res.redirect("/user");
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
                return res.redirect("/user");
            }
            return res.render("User/signIn.ejs");
        })
        .catch(() => {
            return res.render("User/signIn.ejs");
        });
}