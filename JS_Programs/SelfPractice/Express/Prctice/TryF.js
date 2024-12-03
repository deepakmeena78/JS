const express = require('express');
const app = express();

app.use(function (req, res, next) {
    console.log("First => Middleware Runn");
    next();
});

app.use(function (req, res, next) {
    return next(new Error("Something is Wrong"));
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send("Something is Wrong Bro");
});

app.get("/", function (req, res) {
    res.send("Meena JI in InfoBeans");
});

app.listen(3000);