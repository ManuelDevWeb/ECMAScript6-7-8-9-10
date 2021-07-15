let array = [1, 2, 3, 4, 5];

//Devolver una matriz con cualquier submatris aplanada y mapear cada elemento
//Muestra el primer valor y seguido ese valor * 2
console.log(array.flatMap((value) => {
    return [value, value * 2]
}));