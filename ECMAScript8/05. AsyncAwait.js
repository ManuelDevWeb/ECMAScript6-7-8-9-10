const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) ?
        setTimeout(() => {
                resolve("Hello World");
            }, 2000):
            reject(new Error('Test Error'));
    })
}

//Async hace que nuestro funcion se comporte de forma asincrona
const helloAsync = async() => {
    //La expresión await provoca que la ejecución de una función async sea pausada hasta que 
    //una Promise sea terminada o rechazada, y regresa a la ejecución de la función async después del término.
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

//Ejecutando correctamente Async Await
const anotherFunction = async() => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error)
    }
}

anotherFunction();