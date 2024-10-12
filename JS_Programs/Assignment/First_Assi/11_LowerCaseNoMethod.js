// #1. Write a program to convert string into lowercase without any library function.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter Your Name :  ', s1 => {
    const temp1 = s1.toString();
    for (let i = 0; i < temp1.length; i++) {
        let temp2 = s1.charCodeAt(i);
        let temp3 = temp2 - 32;
        process.stdout.write(String.fromCharCode(temp3));
    }
    readline.close();
});