const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

app.get("/", (req, res) => {
    bcrypt.genSalt(10, (err, solt) => {
        bcrypt.hash("meena@1214", solt, (err, hash) => {
            console.log(hash);
        });
    });
});
//$2b$10$GGT6Y8kuK9m6TiPxnAgO3.
app.listen(2100, () => {
    console.log("Server Is Started");
});