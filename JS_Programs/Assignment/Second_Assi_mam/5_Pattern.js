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

function fun(num) {
    for (let i = 1; i <= num; i++) {
        let cou = 1;
        for (let j = 1; j <= (i + i) - 1; j++) {
            if (j >= i && j <= i) {
                process.stdout.write(cou);
            }
            else {
                process.stdout.write(" ");
            }
        }
        process.stdout.write("\n");
    }
}