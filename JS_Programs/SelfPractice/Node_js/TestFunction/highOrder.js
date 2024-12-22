function fun(call) {
    call();
}

function high() {                                   // high Order
    console.log("High Order Function : ");
}

fun(high);