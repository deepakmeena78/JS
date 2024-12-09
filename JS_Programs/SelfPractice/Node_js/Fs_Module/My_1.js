const fs = require("fs");
const content = "Great Meena";
fs.writeFile("My_1.txt", content, () => {
    console.log("Successfull");
});