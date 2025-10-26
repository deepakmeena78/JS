// function fun(arr, taget) {

//     let left = 0;
//     let right = arr.length - 1;
//     while (left <= right) {
//         let mid = Math.floor((right + left) / 2);
//         if (arr[mid] === taget) {
//             return mid;
//         } else if (arr[mid] < taget) {
//             left = mid + 1;
//         }
//         else {
//             right = mid - 1;
//         }
//     }
//     return -1;
// }

// let arr = [1, 2, 5, 4, 8, 9, 3, 2, 7];
// let target = 5;

// let result = fun(arr, target);

// if (result !== -1) {
//     console.log("found index : ", result);
// }
// else {
//     console.log('Not Fount');
// }



















let num = 123;
let rev = 0;

while (num != 0) {
    let digit = num % 10;
    rev = Math.floor((rev * 10) + digit);
    num = Math.floor(num / 10);
}

console.log(rev);
