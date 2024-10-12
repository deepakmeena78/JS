// #3. Write a program to count total number of vowels and consonants in a string.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let sum = 0;

readline.question('Enter Your Name :  ', s1 => {
    let temp1 = s1.toString().toLowerCase();
    for (let i = 0; i < temp1.length; i++) {
        let temp2 = temp1.charAt(i);
        if (temp2 == 'a' || temp2 == 'e' || temp2 == 'i' || temp2 == 'o' || temp2 == 'u') {
            sum++;
        }
    }
    console.log(sum);
    readline.close();
});


