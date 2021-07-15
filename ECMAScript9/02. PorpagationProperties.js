const obj = {
    name: 'Manuel',
    age: 20
}

const obj2 = {
    ...obj,
    country: 'Medellin'
}

//console.log(obj2);

//all tendria el valor de age y country
const { name, ...all } = obj2;

console.log(all);