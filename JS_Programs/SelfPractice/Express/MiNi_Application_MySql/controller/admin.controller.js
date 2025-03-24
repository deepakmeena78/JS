import { request } from "express";
import Admin from "../models/Admin.Module.js";
import bcrypt from "bcrypt";

let admin = new Admin();
export const taskComplete = (req, res) => {
  const id = req.params.id;
  const newStatus = "complete";
  statusUpdate.updateStatus(id, newStatus)
    .then(() => {
      res.redirect("/task/complete-task");
    })
    .catch((err) => {
      return res.render("Admin/Error.ejs");
    });
};

export const Task = (req, res) => {
  admin.PendingShow()
    .then((value) => {
      return res.render("Admin/Task.ejs", { data: value });
    })
    .catch(() => {
      return res.render("Admin/Error.ejs");
    })
}

export const HomePage = (req, res) => {
  return res.render("Admin/HomePage.ejs");
}

export const SignIn = (req, res) => {
  return res.render("Admin/signIn.ejs");
}

export const signUpPage = (request, response) => {    // Sign Up Page
  return response.render("Admin/signUp.ejs");
}


export const signInPage = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.redirect("/admin/sign-in");
  }
  try {
    admin.SignInData(email, password)
      .then((value) => {
        const matchdata = bcrypt.compare(password, value.password);
        if (matchdata) {
          // req.session.isLoggedIn = true;
          // req.session.email = email;
          return res.redirect("/admin");
        }
      })
      .catch(() => {
        return res.redirect("/admin/sign-in");
      });
  } catch (err) {
    console.log("Good Yaar 57 Line, controller");
  }
}



export const signUp = async (request, response) => {
  let { email, password } = request.body;
  if (!email || !password) {
    return response.redirect("/admin/sign-up");
  }
  const hashpassword = await bcrypt.hash(password, 10);
  admin.SignUpData(email, hashpassword)
    .then(() => {
      return response.redirect("/admin");   // Sign Up to DataBase
    })
    .catch((err) => {
      return response.render("Admin/Error.ejs");
    });
}

