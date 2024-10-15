/*           *
            ***
           *****
          *******
         *********                     */

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a Number : ', str => {
    fun(str);
    readline.close();
});

function fun(num) {
    for (let i = 1; i <= num; i++) {
        for (let j = num; j >= i; j--) {
            process.stdout.write(" ");
        }
        for (let j = 1; j <= (i+i)-1; j++) {
            process.stdout.write("*");
        }
        process.stdout.write("\n");
    }
}