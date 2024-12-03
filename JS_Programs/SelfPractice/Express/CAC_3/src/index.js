import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import dotenv from "dotenv";

dotenv.config(); // Load .env file

const app = express();

(async () => {
    try {
        // MongoDB Connection
        const uri = `${process.env.MONGODB_URI}/${DB_NAME}`;
        console.log(`Connecting to MongoDB: ${uri}`); // Debug log
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB!");

        // Express Error Listener
        app.on("error", (error) => {
            console.error("App ERROR: ", error.message);
        });

        // Start the Express Server
        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`App is running on http://localhost:${port}`);
        });

    } catch (error) {
        console.error("ERROR during app initialization: ", error.message);
        process.exit(1); // Exit process with failure
    }
})();
