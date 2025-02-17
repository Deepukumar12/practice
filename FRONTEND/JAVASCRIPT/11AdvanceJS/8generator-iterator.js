function *numberGenerator()
{
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

let gen = numberGenerator();
// console.log(gen);

let genTwo = numberGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

console.log(genTwo.next().value);
console.log(genTwo.next().value);