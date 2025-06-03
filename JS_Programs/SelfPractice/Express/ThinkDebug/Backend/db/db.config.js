import mongoose from "mongoose";

const DBconnect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log('DB Connected......');
    } catch (error) {
        console.log("DB Connect Problems");
    }
}

export default DBconnect;