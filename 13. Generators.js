//* Para indicar que es generator
function* helloWorld() {
    if (true) {
        yield 'Hello!!!';
    }
    if (true) {
        yield 'World!!';
    }
}

const generatorHello = helloWorld();

console.log(generatorHello.next().value); //Retorna Hello
console.log(generatorHello.next().value); //Retorna World
console.log(generatorHello.next().value);

function* incremento() {
    let count = 1;

    while (count != 0) {
        count++;
        yield count;
        if (count > 9) {
            count = 0;
            yield count;
        }
    }

    return;
}

const generatorInc = incremento();
console.log(generatorInc.next().value);
console.log(generatorInc.next().value);
console.log(generatorInc.next().value);
console.log(generatorInc.next().value);
console.log(generatorInc.next().value);
console.log(generatorInc.next().value);
console.log(generatorInc.next().value);
console.log(generatorInc.next().value);
console.log(generatorInc.next().value);
console.log(generatorInc.next().value);