/* 
    Promesas
*/

function promesa(bandera) {
    return new Promise((resolve, reject) => {
        if (bandera) {
            setTimeout(() => {
                resolve("Peticion resuelta");
            }, 3000);    
        } else {
            reject("La operacion fallo");
        }
        
    });    
}
/* 
    promesa(true)
        .then((resultado) => {
            console.log("Respuesta positiva ",resultado);
        })
        .catch((error) => {
            console.log("Error ",error);
        });
*/

var segundaPromesa = (bandera) => new Promise((resolve, reject) => {
    if (bandera) {
        setTimeout(() => {
            resolve("Peticion resuelta");
        }, 3000);    
    } else {
        reject("La operacion fallo");
    }
});

segundaPromesa(true)
    .then((resultado) => {
        console.log("Respuesta positiva ",resultado);
    })
    .catch((error) => {
        console.log("Error ",error);
    });

promesa(true)//peticion de clientes
    .then((resultado) => {//respuseta lista clientes
        console.log("Respuesta positiva ",resultado);
        return segundaPromesa(true);//compras del cliente
    })
    .then((resupesta) => {//respuesta de la segunda promesa
        console.log(resupesta)
    })
    .catch((error) => {
        console.log("Error ",error);
    });