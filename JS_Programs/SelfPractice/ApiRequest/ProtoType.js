let hero = ["A", "B"]

let power = {
    A: "Chiku",
    B: "Piku",

    getall: function () {
        console.log(`Spider ${this.B}`);
    }
}

Object.prototype.ankit = function () {
    console.log("ankit parante");
}
Array.prototype.huyAnkit = function () {
    console.log("Ankit say  Hello ");
}
hero.ankit()
power.huyAnkit