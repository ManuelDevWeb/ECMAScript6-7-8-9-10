const obj = {
    name: 'Manuel',
    age: 20,
    country: 'Medellin'
}

let { name, ...all } = obj;

console.log(`Name: ${name}`);
console.log(`Additional information: `, all);