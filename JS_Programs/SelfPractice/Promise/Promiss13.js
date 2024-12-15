const p = new Promise(function (resolve, rejet) {
    setTimeout(function () {
        console.log("Promise Resolve");
        resolve();
    }, 3000);
});

p.then(function () {
    console.log("Than ");
}).catch(function (err) {
    console.log(err);
}).finally(function () {
    console.log("Finally");
});