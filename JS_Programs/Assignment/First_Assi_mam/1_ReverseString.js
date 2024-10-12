// Write a function that takes a string and returns its reverse

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter String :  ', str => {
    console.log(fun(str));
    readline.close();
});

function fun(num) {
    let rev = "";
    for (let i = num.length; i >= 0; i--) {
        let temp = num.charAt(i);
        rev += temp;
    }
    return rev;
}