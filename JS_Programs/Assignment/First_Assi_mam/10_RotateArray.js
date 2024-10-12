// 10. Rotate an array by k positions to the right.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter Rotate Number : ', str => {
    fun(str);
    readline.close();
});
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function fun(user) {
    for (let i = 0; i < user; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
    let str = '';
    for (let j = 0; j < arr.length; j++) {
        str = str + " " + arr[j];
    }
    console.log("Rotate Array : ",str);
}