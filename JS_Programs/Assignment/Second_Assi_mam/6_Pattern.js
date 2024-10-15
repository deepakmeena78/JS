/*          1
            23
            456
            78910               */

const readline = require('readline').createInterface({
   input: process.stdin,
   output: process.stdout
});

readline.question('Enter a Number : ', str => {
   fun(str);
   readline.close();
});

function fun(num) {
   let count = 1;
   for (let i = 1; i <= num; i++) {
      for (let j = 1; j <= i; j++) {
         process.stdout.write(count.toString());
         count += 1
      }
      process.stdout.write("\n");
   }
}