const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("./public"));

app.get("/", (req, res) => {
    res.render("index", { JaneDoe: "Ankit Meena" });
});

app.get("/home", (req, res) => {
    0
    res.render("index2");
});

// app.get("/error", (req, res) => {
//     res.render("error");
// });

// app.get("/error", (err, req, res, net) => {
//     throw console.error(" ");

//     res.render("error");
// });


app.listen(2000, () => {
    console.log("Successful");
});