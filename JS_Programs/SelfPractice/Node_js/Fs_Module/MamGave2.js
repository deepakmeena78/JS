const http = require("http")
const serv1 = http.createServer((req, res) => {
    res.end("InfoBeans Foundation Batch-10th")
})
serv1.listen(2000, "localhost", function () {
    console.log("connected with server at http://localhost:2000");
});


// const http = require("http");
// const fs = require("fs")
// const c = fs.readFileSync("./index.html")

// const serv = http.createServer(function (req, res) {
//     if (req.url === "/")
//         return res.end("<h1> home page </h1>")
//     else if (req.url === '/about')
//         return res.end("<h1> About page")
//     else if (req.url === '/contact')
//         return res.end(c)
//     else
//         return res.end("<h1> 404 Page not found </h1>")
// })

// serv.listen(2000, "localhost", function () {
//     console.log("connected with server at http://localhost:2000");
// });