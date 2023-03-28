const usuarioAutentificado = new Promise( (resolve, reject) =>{
    const auth = true;
    if (auth) {
        resolve('Usuario autentificado'); //el primise se cumple
    } else {
        reject('No se pudo iniciar sesion');
    }
});

usuarioAutentificado
    .then(function(resultado){
        console.log(resultado)
    })
    .catch (function (error){
        console.log(error)
    })

// en los promisees existen 3 valores 
// Pending: no se ha cumplido pero tampoco se ah rechazado
// Fulfilled: ya se cumplio
// rejected: se ah rechazado o no se puede cumplir
