const temp = new Promise(function (resolve, rejet) {
    setTimeout(function () {
        console.log('Promise Chal Gaya');
        resolve();
    }, 4000);
});
temp.then(function () {
    console.log("Than Code");
}).catch(function (err) {
    console.log(err, "Catch Code");
})

// function temp() {
//     setTimeout(function () {
//         console.log("Chalega");
//     }, 5000);
// }

// temp();
