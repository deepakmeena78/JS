const Promisss = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ Name: "Ankit", Email: "DummyEmail@gmail.com" });
    }, 2000)
})

Promisss.then(function (user) {
    console.log(user);
})