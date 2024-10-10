function fun (num){
    return num * 5
}

fun.power = 2

console.log(fun(5));
console.log(fun.power);
console.log(fun.prototype);


function user (name ,score){
    this.name = name
    this.score=score 
}

user.prototype.increment = function(){
    score++
}
user.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
    
}
const chai  = new user("Deepak",101)
const code  = new user("InfoBeans",102)

chai.printMe()