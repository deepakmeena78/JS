//*5. Write a program to find reverse of a string.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter Your Name :  ', s1 => {
    rev(s1);
    readline.close();
});

function rev(str) {
    const main = str.split('').reverse().join('');
    console.log(main);
}
