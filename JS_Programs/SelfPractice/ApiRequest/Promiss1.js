const p = new Promise(function(resolve,rejet){
    setTimeout(function() {
        console.log("Execute");
        resolve()
    },1000);
});

p.then(function(){
    console.log("Congum");
})