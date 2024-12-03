const { log } = require('console');
const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Good Yaar");
})

http.createServer(2000, () => {
    console.log("Connected");
});

server.listen(3000, () => {
    console.log("Thik Hai");
});