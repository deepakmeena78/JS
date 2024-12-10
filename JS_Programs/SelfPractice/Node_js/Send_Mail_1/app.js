const express = require("express");
const app = express();

const sendMail = require("./controllers/sendMail");
app.get("/email", sendMail);

app.get("/", (req, res) => {
    res.send("I am Server");
});

const start = async () => {
    try {
        app.listen(3000, () => {
            console.log("Server Start");
        });
    } catch (err) {
        console.log("Error Hai ", err);
    }
};

start();