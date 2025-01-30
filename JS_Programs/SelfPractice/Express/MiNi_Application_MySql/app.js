import express from "express";
import AdminRouter from "./routes/admin.route.js";
import TaskRouter from "./routes/task.route.js";
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/admin", AdminRouter);
app.use("/task", TaskRouter);

app.listen(3000, () => {
    console.log("Server Started....");
});
