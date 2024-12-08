const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === "/") {
        res.end("Home PAge");
    }
    else if (url === "/1") {
        res.end("First PAge");
    }
    else if (url === "/2") {
        res.end("Second PAge");
    }
});

server.listen(3000, () => {
    console.log("Thik Hai");
});