const names = [
    { name: 'Manuel', edad: 20, country: 'COL' },
    { name: 'Alex', edad: 50, country: 'COL' },
]

//Sin arrow functions
let listOfName = names.map(function(item) {
    console.log(item.name);
})

//Con arrow functions
let listOfName2 = names.map((item) => {
    console.log(item.name);
})

//Otras formas de usar arrow functions
const listOfName3 = (name, age, country) => {
    console.log(name, age, country)
}
listOfName3("Hola", 21, "chao");

const listOfName4 = (name = 'Hola Manuel') => {
    console.log(name);
}

const square = (num) => {
    console.log(num * num);
}
square(4);