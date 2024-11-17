new Promise(function (yes, no) {
    setTimeout(function(){
        console.log("Create Promise");
        yes();
    }, 3000)
}).then(function () {
    console.log("Complete Promise");
})