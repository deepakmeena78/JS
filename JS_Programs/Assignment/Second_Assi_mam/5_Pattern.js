/*          1
           121
          12321
         1234321
        123454321             */

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a Number : ', str => {
    fun(str);
    readline.close();
});

let cou = 0;
function fun(num) { 
    for (let i = num; i >= 1; i--) {
        for (let j = num; j <= (2 * num) - 1; j++) {
            if (j >= i && j <= (2 * num) - i) {
                process.stdout.write("*");
            }
            else {
                process.stdout.write(" ");
            }
        }
        process.stdout.write("\n");
    }
}