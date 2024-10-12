// 11. Write a function that returns the intersection of two arrays (common elements).

const arr = [3, 7, 9, 2];
const arr1 = [1, 6, 3, 8, 7];

function fun() {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr[i] == arr1[j]) {
                console.log(arr[i]);
            }
        }
    }
}

fun();