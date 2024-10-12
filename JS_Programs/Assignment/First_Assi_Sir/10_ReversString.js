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
    let temp = str.toString();
    for (let i = temp.length; i >= 0; i--) {
        let temp2 = temp.charAt(i);
        let final = temp2;
        process.stdout.write(final);
    }
}
