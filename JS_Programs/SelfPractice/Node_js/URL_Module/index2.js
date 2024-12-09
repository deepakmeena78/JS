const { URL } = require('url');

const myUrl = new URL('https://www.example.com:6260/p/a/t/h?query=string#hash');

console.log(myUrl.hash);
console.log(myUrl.host);
console.log(myUrl.hostname);
console.log(myUrl.href);
console.log(myUrl.pathname);
console.log(myUrl.port);
console.log(myUrl.protocol);
console.log(myUrl.search);
console.log(myUrl.searchParams);
console.log(myUrl.toString());
console.log(myUrl.toJSON());
