const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true; // 'Error' corrected to lowercase 'error'
        if (!error) {
            resolve({ Name: "InfoBeans", Batch: 10 });
        } else {
            reject("An error has occurred");
        }
    }, 2000);
});

fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log(error);
    });