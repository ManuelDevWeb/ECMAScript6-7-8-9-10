/**Let y Var**/

{
    var globalVar = "Global var";
}

{
    //Let solo funciona dentro del bloque de codigo que se definio (Scopa)
    let globalLet = "Global let";
    console.log(globalLet);
}

console.log(globalVar);
console.log(globalLet);


/**Const**/

//Las constantes no cambian su valor
const a = 'b';
a = 'a';
console.log(a);