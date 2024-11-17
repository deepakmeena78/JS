const p = new Promise(function(resolve,rejet){
    setTimeout(function() {
        resolve({userName: "InfoBeans Ankit",email: "deepakmeenaa78@gmail.com"})
    },1000);
});

p.then(function(user){
    console.log(user);
})