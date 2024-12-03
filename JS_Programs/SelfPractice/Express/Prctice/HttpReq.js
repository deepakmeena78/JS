const http = require('http');
// const fs = require('fs');

const server = http.createServer(function (req, res) {
    res.end("Good Yaar 1");
});

server.listen(2111, "localhost", function () {
    console.log("Click Here => http://localhost:2111");
})