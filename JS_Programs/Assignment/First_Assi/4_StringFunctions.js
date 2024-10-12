let str = new String("InfoBeans");

console.log(str.length);                         // 9
console.log(str.charAt(1));                      // n
console.log(str.indexOf("f"));                   // 2
console.log(str.lastIndexOf("I"));               // 0
console.log(str.slice(0, 8));                    // InfoBean
console.log(str.substr(0, 5));                   // InfoB
console.log(str.toLocaleLowerCase());            // infobeans
console.log(str.toLocaleUpperCase());            // INFOBEANS


let str2 = new String("@  Ankit  Meena!");       // [ '@  Ankit  Meena!' ]
console.log(str2.split(", "));                   // @  Ankit  Meena!
console.log(str2.replace("Deepak  ", "Meena"));
console.log(str2.includes("@"));                 // true
console.log(str2.concat(str));                   // // @  Ankit  Meena!InfoBeans
console.log(str2.startsWith("@"));               // true
console.log(str2.endsWith("!"));                 // true
