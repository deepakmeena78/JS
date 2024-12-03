const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("index");
});

app.get("/Meena/:Name", function (req, res) {
    res.send(req.params.Name);
});

app.get("/Meena/:Name/:Age", function (req, res) {
    res.send(`Your InFo :  ${req.params.Name},${req.params.Age}`);
});

app.listen(200, function () {
    console.log("Good Yaar");
});