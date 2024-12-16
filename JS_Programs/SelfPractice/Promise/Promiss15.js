const a = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promise");
        resolve({ name: "Deepak", age: "19" });
    }, 2000);
});

a.then(function (user) {
    console.log(`Name : ${user.name}\n Age : ${user.age}`);
}).catch(function () {
    console.log("Error");
});
