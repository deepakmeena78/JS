function* numberGenerator() {
    console.log('Hello 1');
    yield 1;
    console.log('Hello 2');
    yield 2;
    console.log('Hello 3');
    yield 3;
}

const gen = numberGenerator();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next()); 
