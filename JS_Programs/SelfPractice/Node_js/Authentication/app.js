const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

// app.get("/", function (req, res) {
//     bcrypt.genSalt(10,function(err,salt){
//         bcrypt.hash("Popololo",salt,function(err,hash){
//             console.log(hash);
//         })
//     })
// });
//$2b$10$8h9Zk7mRAKPSk2aanZQBzOla.7e.4ZH5mF0E9GVet0sQ8SXzZBPi2

app.get("/", function (req, res) {
    bcrypt.compare("Popololo", "$2b$10$8h9Zk7mRAKPSk2aanZQBzOla.7e.4ZH5mF0E9GVet0sQ8SXzZBPi2", function (err, result) {
        console.log(result);
    })
});

app.listen(3000, function () {
    console.log("Successfully");
})