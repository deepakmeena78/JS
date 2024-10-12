// 2. Write a function that checks whether a given string is a palindrome (reads the same
// backward as forward).

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter String :  ', str => {
    fun(str);
    readline.close();
});

function fun(num) {
    let rev = "";
    for (let i = num.length; i >= 0; i--) {
        let temp = num.charAt(i);
        rev += temp;
    }
    if (rev == num) {
        console.log("PalinDrome");
    }
    else {
        console.log("Not a PalinDrome");
    }
}