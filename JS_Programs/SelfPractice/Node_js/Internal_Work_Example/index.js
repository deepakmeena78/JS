process.env.UV_THREADPOOL_SIZE = 2;

const crypto = require("crypto");

const start = Date.now();

console.log(`${Date.now() - start}ms`, "Top Level Code");

setTimeout(() => {
    console.log(`${Date.now() - start}ms`, "Set Time Out");
}, 0);

setImmediate(() => {
    console.log(`${Date.now() - start}ms`, "SetImmediate Function");
});

console.log(`${Date.now() - start}ms`, "Top Level Code 2");

crypto.pbkdf2('password1', 'salt1', 100000, 1024, 'sha512', () => {
    console.log(`${Date.now() - start}ms`, "Password 1 Done");
});

crypto.pbkdf2('password2', 'salt1', 100000, 1024, 'sha512', () => {
    console.log(`${Date.now() - start}ms`, "Password 2 Done");
});

crypto.pbkdf2('password3', 'salt1', 100000, 1024, 'sha512', () => {
    console.log(`${Date.now() - start}ms`, "Password 3 Done");
});

crypto.pbkdf2('password4', 'salt1', 100000, 1024, 'sha512', () => {
    console.log(`${Date.now() - start}ms`, "Password 4 Done");
});

crypto.pbkdf2('password5', 'salt1', 100000, 1024, 'sha512', () => {
    console.log(`${Date.now() - start}ms`, "Password 5 Done");
});

crypto.pbkdf2('password6', 'salt1', 100000, 1024, 'sha512', () => {
    console.log(`${Date.now() - start}ms`, "Password 6 Done");
});
