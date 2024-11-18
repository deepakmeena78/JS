// 2. Write a js function to print your name continuously 10 times with a time delay of 3sec

let stop = setInterval(function(){
    console.log("Ankit");
},3000);

setTimeout(function(){
    clearInterval(stop);
    console.log("Stop");
},33000);