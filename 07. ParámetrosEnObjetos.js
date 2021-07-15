let name = "Manuel";
let edad = 20;
let programador = true;
let comida = 'Tacos';

//Forma antigua
obj = {
    name: name,
    edad: edad
}
console.log(obj);

//EM6
obj2 = {
    name,
    edad
}
console.log(obj2);

obj3 = {
    name,
    edad,
    programador,
    comida
}
console.log(obj3)