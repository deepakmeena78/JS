const p = new Promise(function (resolve, rejet) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ userName: "Ankit_Meena", PassWord: "2412" })
        }
        else {
            rejet('ERROR: JS Went Wrong')
        }
    }, 1000);
});

try {
    async function sam() {
        const temp = await p
        console.log(temp);
    }
} catch (error) {
    console.log(error);
}
sam();

async function alluser() {
    const a = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = a.json()
    console.log(data);
}
alluser()