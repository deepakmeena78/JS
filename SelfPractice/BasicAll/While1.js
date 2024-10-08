let arr = ["A", "B", "C", "D", "E"]

let i = 0
while (i < arr.length) {

    console.log(`${arr[i]}`);                                 // Next Line Print Value

    process.stdout.write(`${arr[i]}`);                        // One Line Print Multiple Value

    console.log(arr[j]);                                 // Next Line Print Value

    process.stdout.write(arr[j]);                        // One Line Print Multiple Value
    i = i + 1;
}