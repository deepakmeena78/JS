import express from "express";
import dotenv from "dotenv";
dotenv.config();
import UserRoutes from "./routes/user.route.js";
import DBconnect from "./db/db.config.js";
DBconnect();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", UserRoutes);

const port = process.env.PORT || 3200;
app.listen(port, () => {
    console.log("Server Started : ", port);
});