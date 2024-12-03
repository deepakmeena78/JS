let arr = "kdhkcsahdyqwuoajkg";
let check = 0;
let Find = "t";

for (let i = 0; i < arr.length; i++) {
    check = 0;
    for (let j = 0; j < arr.length; j++) {
        let temp = arr.charAt(j);
        if (temp == Find) {
            check++;
        }
    }
}

if (check == 1) {
    console.log("This is Avalible");
}
else {
    console.log("This is Not Avalible");
}

