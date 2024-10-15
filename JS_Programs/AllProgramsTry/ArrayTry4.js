const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.shift();
arr.unshift(6);                       // Add First   6,2,3,5...
for (const ft of arr) {
    console.log(ft);
}