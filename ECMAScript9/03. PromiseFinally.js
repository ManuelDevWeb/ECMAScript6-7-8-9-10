const helloWorld = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve("Hello world")
            }, 3000)
        } else {
            reject(new Error("Test Error"));
        }
    })
}

helloWorld()
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })
    //Podemos saber cuando se ha terminado el llamado
    .finally(() => {
        console.log("Finalizo");
    })