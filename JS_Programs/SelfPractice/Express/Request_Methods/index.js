const request = require('request');

request('https://jsonplaceholder.typicode.com/posts/1', (error, response, body) => {
    if (error) {
        console.error('Error:', error);
        return;
    }
    console.log('Status Code:', response.statusCode); // 200
    console.log('Body:', body); // Response Data
});