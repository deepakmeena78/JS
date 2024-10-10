function temp (){
    let name = "Local";
    if(true){
        let name = "Block"
        console.log(name);
    }
    console.log(name);
}

temp();