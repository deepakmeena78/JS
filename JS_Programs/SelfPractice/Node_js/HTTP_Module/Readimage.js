const fs = require("fs");
const http = require("http");
const path = require("path");

const a = fs.readFileSync("./Bubble effect/demo.html");
const serv = http.createServer((req, res) => {
  if (req.url === "/") {

    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(a);
  } else if (req.url === "/about") {

    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end("<h1>About Page</h1>");
  } else if (req.url === "/contact") {

    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end("<h1>Contact Page</h1>");
  } else {

    const filePath = path.join(__dirname, "Bubble effect", req.url);
    fs.readFile(filePath, (err, data) => {
      if (err) {

        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("<h1>404 - File Not Found</h1>");
      } else {

        const ext = path.extname(filePath);
        let contentType = "text/plain";
        if (ext === ".jpg" || ext === ".jpeg") contentType = "image/jpeg";
        else if (ext === ".png") contentType = "image/png";
        else if (ext === ".gif") contentType = "image/gif";
        else if (ext === ".css") contentType = "text/css";
        else if (ext === ".js") contentType = "application/javascript";

        res.writeHead(200, { "Content-Type": contentType });
        return res.end(data);
      }
    });
  }
});


serv.listen(2000, "localhost", () =>
  console.log("Connected to the server at http://localhost:2000")
);
