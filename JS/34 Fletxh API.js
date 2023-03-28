
async function obtenerEmpleados (){
    
    const url = 'empleados.json';
    /*
    fetch (url)
        .then(resultado =>resultado.json())
        .then (datos =>{

            const { empleados } = datos;
            //console.log(datos);
            empleados.forEach(empleado => {
            //console.log(empleado);
            console.log(empleado.nombre);
            
            });
        })
    */
   const resultado = await fetch(url);
   const datos = await resultado.json();
   console.log(datos);
}
obtenerEmpleados();