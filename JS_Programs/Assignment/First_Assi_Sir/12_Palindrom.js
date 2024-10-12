// #2. Write a program to accept a string and check if it is palindrome or not?

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter Your Name :  ', s1 => {
    pali(s1);
    readline.close();
});

function pali(num) {
    const com = num.split('').reverse().join('');
    if (com == num) {
        console.log("PalinDrom");
    }
    else {
        console.log("Not PalinDrom");
    }
}