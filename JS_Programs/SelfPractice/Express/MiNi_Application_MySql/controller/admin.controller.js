import Admin from "../models/admin.model.js";
export const signUpPage = (request, response) => {
  return response.render("signUp.ejs");
}

export const signUp = (request, response) => {
  let { email, password } = request.body;
  let admin = new Admin(email, password);
  admin.insertData()
    .then((result) => {
      return response.status(200).json({ msg: "Value : ", result });
    })
    .catch((err) => {
      return response.status(500).json({ msg: "ERROR : ", err });
    });
}

