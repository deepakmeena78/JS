import User from "../model/userModel.js"

export const signInAction = async (req, res) => {
    const { name, email, password } = req.body;
    const createUser = new User({ name, email, password });
    const data = createUser.save();
    console.log("Data Insert");
    res.send("Good Yaar");
}

export const signIn = (req , res)=>{
    res.render("index")
}

