
function downloadNewClients ( ){
    return new Promise(resolve =>{
        console.log('Descargando clientes... espere....');

        setTimeout(()=>{
            resolve ('Los clientes fueron descargados');
        }, 5000);
    })
}
function downloadLastProducts ( ){
    return new Promise(resolve =>{
        console.log('Descargando Pedidos... espere....');

        setTimeout(()=>{
            resolve ('Los pedidos fueron descargados');
        }, 3000);
    })
}

async function app() {
    try {
        //const clientes = await downloadNewClients();
       // console.log (clientes);
       const resultado = await Promise.all([ downloadNewClients(), downloadLastProducts() ])
       console.log(resultado[0]);
       console.log(resultado[1]);
        
    } catch (error){
        console.log(error);
    }
}

app();

