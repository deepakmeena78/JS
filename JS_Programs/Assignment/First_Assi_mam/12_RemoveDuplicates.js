// 12. Write a function to remove duplicates from an array.

const arr = [2, 3, 4, 2, 6, 7, 5, 3];
const arr1 = [];
let count = 0;
let str = '';

function fun() {
    for (let i = 0; i <= arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++;
            }
            else{
                if (count == 0 && j == arr.length) {
                    for (let j = 0; j < arr.length; j++) {
                        str = str + " " + arr[i];
                    }
                }
            }
            count += 0;
        }
    }
    console.log(str);
}hkfskhfkhkhsh m  fhsf hfh fhslfhh fe  fef

fun();
