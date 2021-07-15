//Forma antigua
function newFunction(name, age, country) {
    var name = name || 'Manuel';
    var age = age || 20;
    var country = country || 'COL';
    console.log(name, age, country);
}

//newFunction();

//ES6
function newFunction2(name = 'Manuel', age = '20', country = 'COL') {
    console.log(name, age, country);
}

function newFunction3(name = 'Moises', age = '4', animal = 'Gato') {
    console.log(name, age, animal);
}

newFunction2();
newFunction2('Valencia', '21', 'Colombia');

newFunction3('Kala', '5');