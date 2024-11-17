const Promisss = new Promise(function (resolve, reject) {
    setInterval(function () {
        let Error = true;
        Error = true;
        if (!Error) {
            resolve({ Name: "Ankit", Batch: 10 });
        }
        else {
            reject("Kuch To Hua hai");
        }
    }, 2000);
});

Promisss.then(function (user) {
    console.log(user);
    return user.Name
}).then(function (Name) {
    console.log(Name);
}).catch(function (Error) {
    console.log(Error);
}).finally(function(){
    console.log("Finally Error A Gai");
})