const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
  };

  const routes = {
    '/': 'index.html',
    '/signup': 'signup.html',
    '/signin': 'signin.html',
    '/product': 'product.html',
    '/feedback': 'feedback.html',
  };
  console.log(req.url)
  console.log(routes)
  console.log(routes[req.url])
  if (routes[req.url]) {
    const filePath = path.join(__dirname, 'public', routes[req.url]);
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
      }
      res.end();
    });
  } else {
    // Serve static files (CSS, JS, Images)
    const filePath = path.join(__dirname, 'public', req.url);
    const ext = path.extname(req.url);
    const contentType = mimeTypes[ext];

    if (contentType) {
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.write('File Not Found');
        } else {
          res.writeHead(200, { 'Content-Type': contentType });
          res.write(data);
        }
        res.end();
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.write('Page Not Found');
      res.end();
    }
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
