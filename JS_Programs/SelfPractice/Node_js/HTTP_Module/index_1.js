const http = require("http");
const server = http.createServer((request, response) => {
    if (request.url == "/1") {
        response.write("<h1>1 Page</h1>");
        response.write("<a href='/2'>Next_Page</a>");
    } else if (request.url == "/2")
        response.write("<h1>2 Page</h1>");
    else if (request.url == "/3")
        response.write("<h1>3 Page</h1>");
    else
        response.write("<h1 style='color:red'>404 Requested resource not found</h1>")
    response.end();
});
server.listen(3000, () => {
    console.log("Server Started...");
});