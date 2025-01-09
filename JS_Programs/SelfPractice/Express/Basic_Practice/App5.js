// req.query 

const ex = require('express')
const path = require('path')
const app = ex()

const validate = (req, res, next) => {
    if (req.query.id < 15)
        next();
    else
        res.send("invalid user")
}

app.get('/', validate, (req, res) => {
    res.send('<h1> its great </h1>')
    console.log("from home")
})

app.listen(4000, () => {
    console.log("started server at 4000")
});