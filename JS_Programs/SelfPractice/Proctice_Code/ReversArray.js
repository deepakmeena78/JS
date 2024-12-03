let arr = [5, 4, 3, 2, 1];

for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[(arr.length - 1) - i];
    arr[(arr.length - 1) - i] = temp;
}

for (let i = 0; i < arr.length; i++) {
    process.stdout.write(arr[i] + " ");
}