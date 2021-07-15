/**Destructuring**/

let person = {
    name: 'Manuel',
    age: 20,
    country: 'COL'
}

let animal = {
    nameAnimal: 'Kala',
    edadAnimal: 5,
    gato: true
}

//Destructuring antes
console.log(person.name, person.age, person.country);

//Destrucruting EM6
let { name, age, country } = person;
console.log(name, age, country);

let { nameAnimal, edadAnimal, gato } = animal;
console.log(nameAnimal, edadAnimal, gato);