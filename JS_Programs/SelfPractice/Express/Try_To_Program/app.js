import express from "express";
import dotenv from "dotenv";
dotenv.config();
import userRoute from "./routes/user.route.js";
import connectDB from "./db/db.config.js";
const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoute);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Example app listening on port : ${port}`)
});
