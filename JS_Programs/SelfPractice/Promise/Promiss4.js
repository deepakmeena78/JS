const p = new Promise(function (resolve, rejet) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ userName: "Ankit_Meena", PassWord: "2412" })
        }
        else {
            rejet('ERROR: Something Went Wrong')
        }
    }, 1000);
});

p.then((user) => {
    console.log(user);
    return user.userName
}).then((kuch_Toh_Hua_Hai) => {
    console.log(kuch_Toh_Hua_Hai, '=> ');
}).catch(function (exception) {
    console.log(exception);
}).finally(() => console.log("🤣"))