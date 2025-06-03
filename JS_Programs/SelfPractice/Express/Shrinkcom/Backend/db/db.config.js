import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Database Connected...........");

    } catch (error) {
        console.log("Data Connection Errore", error);
    }
}

export default dbConnect;