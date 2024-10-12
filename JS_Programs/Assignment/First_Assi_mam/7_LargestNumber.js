// 7. Write a function to find the largest number in an array

function fun (){
    let count = 0;
    const arr = [4,5,9,0,8,3,2,6,8];
    for (let i = 0; i < arr.length; i++) {
        if(count < arr[i]){
            count += arr[i];
        }
    }
    console.log("Largest Number : ",count);
}


fun();