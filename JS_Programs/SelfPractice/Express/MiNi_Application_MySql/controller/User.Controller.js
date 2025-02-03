// import User from "../models/User.js";

export const Home = (req, res) => {
    return res.render("User/HomePage.ejs");
}

export const signUpPage = (req, res) => {
    return res.render("User/signUp.ejs");
}

export const SignIn = (req, res) => {
    return res.render("User/signIn.ejs");
}

export const signUp = (req,res)=>{
    
}