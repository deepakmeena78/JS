const http = require('http');
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req, res) => {
    if (req.method === "GET") {
        res.write(`successFul Run \n Method => :  ${req.method} \n URL => :  ${req.url}`);
    }
    else if (req === "POST") {
        res.write(`successFul Run \n Method => :  ${req.method} \n URL => :  ${req.url}`);
    }
    else {
        res.write("It Is Successfuly run");
    }
    res.end();
});

const PORT = 2000;
myServer.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

