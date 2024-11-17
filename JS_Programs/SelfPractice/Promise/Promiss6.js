const Promisss = new Promise(function (resolve,reject) {
    setTimeout(function () {
        console.log("Promise SeccesFully");
        resolve();
    }, 2000);
})

Promisss.then(function () {
    console.log("I Thik ");
});