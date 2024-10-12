// 3. Write a function to count the number of vowels (a, e, i, o, u) in a given string.

const { log } = require('console');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter String :  ', str => {
    fun(str);
    readline.close();
});

function fun(num) {
    let count = 0;
    for (let i = 0; i <= num.length; i++) {
        let temp = num.toUpperCase().charAt(i);
        if (temp == 'A' || temp == 'E' || temp == 'I' || temp == 'O' || temp == 'U') {
            count++;
        }
    }
    console.log(count);
}