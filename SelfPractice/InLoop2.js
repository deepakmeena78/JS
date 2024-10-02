const arr = ["A", "B", "C", "D", "E"]

for (const index in arr) {                      // Print Only Index
   console.log(index);
}

for (const index in arr) {                     // Print Only Value
   console.log(arr[index]);
}

for (const index in arr) {                    // Print Index and Value Both
   console.log(`${index}  :  ${arr[index]}`);
}