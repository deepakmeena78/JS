const http = require('http');

const server = http.createServer(function (req, res) {
    res.end("Good Yaar");
});

server.listen(2000, "localhost", function () {
    console.log("Click Here => http://localhost:2111");
}); 