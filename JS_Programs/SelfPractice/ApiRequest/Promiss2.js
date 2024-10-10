new Promise(function (resolve, rejet) {
    setTimeout(function () {
        console.log("Execute");
        resolve()
    }, 1000);
}).then(function () {
    console.log("Congum");
})