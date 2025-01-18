const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRoutes");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", userRouter);

app.listen(1200, () => {
    console.log("Server Starte");
});