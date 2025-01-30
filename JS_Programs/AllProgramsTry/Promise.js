console.log("Task 1");

setTimeout(() => {
    console.log("Task 2 (Async)");
}, 2000);

console.log("Task 3");


async function fun() {
    console.log("Task 1 (Sync)");

    await new Promise(resolve => {
        setTimeout(resolve, 2000)
        console.log("Task 2 (Async)");
    });

    console.log("Task 3 (Async)");
}

fun();
