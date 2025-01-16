const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const route = require("./routes/userRoute.js");

const app = express();
app.use(bodyparser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOURL;

mongoose.connect(URL)
    .then(() => {
        console.log("DataBase Is Connected");
        app.listen(PORT, () => {
            console.log("Server Is Started", PORT);
        });
    })
    .catch((arr) => {
        console.log("ERROR : ", arr);
    });

app.use("/api", route);
