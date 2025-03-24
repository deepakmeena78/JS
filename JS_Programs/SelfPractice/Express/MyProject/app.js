import express from "express";
import CostomerRoute from "./routes/Frontend/Customer.routes.js";
import AdminRoute from "./routes/Backend/admin.routes.js";
import HelpRoute from "./routes/Frontend/Help.routes.js";
import CategoryRouter from "./routes/Backend/Category.routes.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/customer", CostomerRoute);
app.use("/admin", AdminRoute);
app.use("/help", HelpRoute);
app.use("/category", CategoryRouter);

app.listen(process.env.PORT || 3200, () => {
    console.log("Server Started");
});
