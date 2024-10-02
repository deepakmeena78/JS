const arr = ["A", "B", "C", "D", "E"]

arr.forEach(function (i) {            // function
    console.log(i);
})

arr.forEach((i) => {                // Arow Function
    console.log(i);
})


arr.forEach((value, index, arrr) => {                // output => A 0 [ 'A', 'B', 'C', 'D', 'E' ]
    console.log(value, index, arrr);
})


// arr.forEach((i) => {                // Arow Function
//     console.log(i);
// })