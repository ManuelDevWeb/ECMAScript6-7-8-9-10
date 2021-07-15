//Evita el callback hell, promesa es la terminacion o fracaso de una operacion asincrona
const helloPromise = (num) => {
    return new Promise((resolve, reject) => {
        if (num < 10) {
            resolve("Hey se resolvio la operacion");
        } else {
            reject("Lo siento hubo un error");
        }
    });
}

helloPromise(11)
    //Obteniendo respuesta de la promesa
    .then((response) => {
        console.log(response);
    })
    .then(() => {
        console.log("Hola");
    })
    .catch((err) => {
        console.log(err);
    });