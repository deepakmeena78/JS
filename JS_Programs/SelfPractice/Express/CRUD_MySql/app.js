import express from "express";
import userRouters from "./Routes/userRouters.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRouters);

app.listen(2350, () => {
    console.log("Server Started");
});