const obj = {
    name: 'deepak',
    b: {
        c: "dsj",
        d: {
            e: "djshsj",
            f: {
                g: "jshd"
            }
        }
    }
}


function fun(obj) {
    for (const element in obj) {
        if (typeof obj[element] === 'object') {
            fun(obj[element])
        }
        else {
            console.log(element + ':' + obj[element]);
        }
    }
}

fun(obj)

