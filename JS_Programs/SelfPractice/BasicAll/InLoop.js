const obj = {
   name: "Ankit",
   Fri: "Jayesh",
   Fri1: "Tanmay",
   Fri2: "Vipin",
   Fri3: "Prakash"
}

for (const key in obj) {            // Print Only Keys
   console.log(key);
}

for (const key in obj) {            // Print Only Value
   console.log(obj[key]);
}

for (const key in obj) {            // Print Keys and Value Both
   console.log(`${key}  :  ${obj[key]}`);
}