const date = new Date();
console.log("1 : "+date.toString());
console.log("2 : "+date.toDateString());
console.log("3 : "+date.toJSON());
console.log("4 : "+date.toLocaleDateString());
console.log("5 : "+date.toLocaleString());
console.log("6 : "+date.toLocaleTimeString());
console.log("7 : "+date.toTimeString());
console.log("8 : "+date.toUTCString());


let date2  = new Date();
console.log(date2.getMonth());
console.log(date2.getDay());

date2.toLocaleString('default',{
    weekday: "long",
})

console.log(date2.toLocaleString('default',{   //current day name
    weekday: "long",
}));
