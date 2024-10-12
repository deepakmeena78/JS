//*1. Write a program to find length of a string.

let sum = 0;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter Your Name :  ', s1 => {
    functi(s1);
    readline.close();
});

function functi(value) {
    for (let ap of value) {
        sum++;
    }
    console.log(sum);
}

