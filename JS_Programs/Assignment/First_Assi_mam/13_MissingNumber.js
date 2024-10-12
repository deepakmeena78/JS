// 13. Given an array containing numbers from 1 to n with one missing, find the missing
// number   

const { log } = require('console');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter Array Number : ', str => {
    const arrt = answer.split(' ').map(str);
    fun(arrt);
    readline.close();
});

function fun(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    for (let i = arr[0]; i < arr.length; i++) {
        if (i != arr[i]) {
            console.log("First Missing : ", i);
            break;
        }
    }
}