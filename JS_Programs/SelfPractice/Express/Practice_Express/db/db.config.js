import mongoose from "mongoose";

async function dbstart() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log("MongoDB connected successfully.");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}

export default dbstart;
