let numbers = [1, 2, 3, 7, 8];
let nums = [1, 0, 1, 0, 1, 1, 1, 0, 1, 0];

//Includes nos sirve para indicar si un valor se encuentra en alguna estructura
if (numbers.includes(7)) {
    console.log("Si se encuentra el 7");
} else {
    console.log("No se cuentra el 7");
}

nums.forEach(num => {
    if (nums.includes(num)) {
        console.log(`El número ${num} se encuentra en el arreglo`);
    } else {
        console.log(`${num} no se encuentra`);
    }
});