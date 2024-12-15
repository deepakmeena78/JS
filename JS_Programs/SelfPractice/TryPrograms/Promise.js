const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data fetched successfully');
    }, 3000);
});
// Handle
myPromise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.error('Error:', error);
});
