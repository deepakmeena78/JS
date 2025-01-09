const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    let temp = `New ${Date.now()} : `;
    fs.appendFile("text.txt", temp, (err, result) => {
        return res.end(temp);
    });
});

server.listen(2150, () => {
    console.log("Server Created ");
});