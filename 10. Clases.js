class Calculator {
    constructor(valuaA, valueB) {
        this.valueA = valuaA;
        this.valueB = valueB;
    }

    sumar() {
        return this.valueA + this.valueB;
    }

    restar() {
        return this.valueA - this.valueB;
    }
}

let suma1 = new Calculator(10, 15);
let resta1 = new Calculator(10, 5);

console.log(suma1.sumar());
console.log(resta1.restar());

class Comida {
    constructor(tamaño, precio) {
        this.tamaño = tamaño;
        this.precio = precio;
    }

    pizza() {
        return `El tamaño de la pizza es ${this.tamaño} y su precio es de ${this.precio}`;
    }
}

let pizza1 = new Comida("8 Porciones", 20000);

console.log(pizza1.pizza());