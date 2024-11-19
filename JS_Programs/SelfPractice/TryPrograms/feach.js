fetch('https://dummyjson.com/products')
    .then(function (value) {
        return value.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log(error);
    })