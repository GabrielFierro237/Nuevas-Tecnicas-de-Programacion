var Promesa = (bandera) => new Promise((resolve, reject) => {
    if (bandera) {
        setTimeout(() => {
            resolve("Peticion resuelta");
        }, 3000);    
    } else {
        reject("La operacion fallo");
    }
});

(async () => {
    try {
        var respuesta = await Promesa(true);
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
})();