import User from "../module/user.module.js";


export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(403).json({ message: "Email is already in use" });
        }
        const newUser = new User({ name, email, password });
        await newUser.save();

        return res.status(201).json({
            message: "User created successfully",
            user: newUser,
        });
    } catch (error) {
        console.error("Create User Error:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};



export const UpdateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, email, password } = req.body;
        const result = await User.findById(id);
        if (!result) {
            return res.status(404).json({ message: "User Not Found" });
        }
        const updateUser = await User.findByIdAndUpdate(id, { name, email, password }, { new: true });
        if (!updateUser) {
            return res.status(304).json({ message: "User Data Not Update" });
        }
        return res.status(200).json({ message: "Data SuccessFully Update" });
    } catch (error) {
        console.log('Update User Error', error);
        return res.status.json({ message: "Internal Server Error" });
    }
}

export const GetUser = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await User.findById(id);
        if (!result) {
            return res.status(404).json({ message: "User Not Found" });
        }
        return res.status(201).json({ message: "User Profile : ", result });
    } catch (error) {
        console.log('Get User : ', error);
        return res.status(500).json({ message: "Internal Server Error Get User ", error });
    }
}


export const DeleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await User.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: "User Not Found" });
        }
        return res.status(201).json({ message: "User Delete successful : ", result });
    } catch (error) {
        console.log('Delete User : ', error);
        return res.status(500).json({ message: "Internal Server Error Delete User ", error });
    }
}