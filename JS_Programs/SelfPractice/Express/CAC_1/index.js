const fs = require("fs");
const http = require("http");
const path = require("path");

const serv = http.createServer((req, res) => {
    if (req.url === "/") {
        const htmlPath = path.join(__dirname, "First.html");
        const htmlContent = fs.readFileSync(htmlPath, "utf-8");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(htmlContent);
    } else if (req.url === "/First.css") { // Serve CSS
        const cssPath = path.join(__dirname, "First.css");
        const cssContent = fs.readFileSync(cssPath, "utf-8");
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(cssContent);

    } else if (req.url === "/1") {
        const htmlPath = path.join(__dirname, "Second.html");
        const htmlContent = fs.readFileSync(htmlPath, "utf-8");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(htmlContent);
    } else if (req.url === "/Second.css") { // Serve CSS
        const cssPath = path.join(__dirname, "Second.css");
        const cssContent = fs.readFileSync(cssPath, "utf-8");
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(cssContent);

    } else if (req.url === "/2") {
        const htmlPath = path.join(__dirname, "Third.html");
        const htmlContent = fs.readFileSync(htmlPath, "utf-8");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(htmlContent);
    } else if (req.url === "/Third.css") { // Serve CSS
        const cssPath = path.join(__dirname, "Third.css");
        const cssContent = fs.readFileSync(cssPath, "utf-8");
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(cssContent);
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404: Page not found");
    }
});

serv.listen(2000, "localhost", () =>
    console.log("Connected to the server at http://localhost:2000")
);
