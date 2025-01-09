const { log } = require("console");
const fs = require("fs");

fs.appendFileSync("text.txt", " Meena Ji");

fs.readFile("text.txt", "utf-8", (err, result) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(result);
    }
});