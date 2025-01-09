//Application level middleware
// Defined at the application level using app.use() or app.METHOD() (e.g., app.get()).
// Applied to specific routes or all routes within the application.


const ex = require('express');
const path = require('path');
const app = ex();

const middleware = (req, res, next) => {
    console.log("to be done first");
    next();
}

app.get('/', middleware, (req, res) => {
    res.send('<h1> its great </h1>');
    console.log("from home route");
});

app.listen(4000, () => {
    console.log("started server at 4000");
});