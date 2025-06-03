import express from "express";
import 'dotenv/config'
import userRoute from "./routes/user.routes.js";
import dbConnect from "./db/db.config.js";
dbConnect();
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoute);

const port = process.env.PORT || 3400;
app.listen(port, () => {
    console.log(`Server Started : ${port}`);
}); 