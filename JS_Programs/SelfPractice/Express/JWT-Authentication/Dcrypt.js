const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

app.get("/", (req, res) => {
    bcrypt.compare("meena@1214", "$2b$10$iwqdZDtQPNV9Ym6pAp1MPOQTo3Tayz.8B8Tuc1/26qWXkMYX0ciVu", (err, resul) => {
        console.log(resul);
    });
});

app.listen(2200, () => {
    console.log("Server Is Started");
});