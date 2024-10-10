const m = new Map()
m.set(1, "A")
m.set(2, "B")
m.set(3, "C")
m.set(4, "D")
m.set(1, "S")

for (const [key, value] of m) {
    console.log(key, ' : ', value);
}
