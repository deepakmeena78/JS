// app.js                                                                                          0

const express = require('express')
const bodyParser = require('body-parser')
const app = express();
app.set('view engine', 'ejs');

const users = [{
    userName: "Ankit Meena",
    userEmail: "dm2000353@gmail.com",
    userAge: "19",
    userUniqueId: '1'
},
{
    userName: "Deepak Meena",
    userEmail: "deepakmeenaa78@gmail.com",
    userAge: "19",
    userUniqueId: '2'
},
{
    userName: "Jayesh Sharma",
    userEmail: "jayeshsharma@gmail.com",
    userAge: "22",
    userUniqueId: '3'
},
{
    userName: "Ajeet Shingh",
    userEmail: "ajeetshingh@gmail.com",
    userAge: "26",
    userUniqueId: '4'
},
{
    userName: "Anand Dharwal",
    userEmail: "ananddharwal@gmail.com",
    userAge: "21",
    userUniqueId: '5'
}
]


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.render("home", { data: users });
});

app.listen(3000, (req, res) => {
    console.log("App is running on port 3000");
});
