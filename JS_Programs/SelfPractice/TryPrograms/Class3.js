class Parent{
    Call1(){
        console.log("Call 1...");
    }
    Call2(){
        console.log("Call 2....");
    }
}

class Child extends Parent{
   call3(){
    console.log("Call 3....");
   }
}

let obj = new Child();
obj.Call1();
obj.Call2();
obj.call3();
