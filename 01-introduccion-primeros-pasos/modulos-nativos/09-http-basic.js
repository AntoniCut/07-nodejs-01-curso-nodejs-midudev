/*
    --------------------------------------------------------
    ----------  /nodejs-desarrollos/  ----------------------
    ----------  /01-curso-nodejs-midudev/  -----------------
    ----------  /01-introduccion-primeros-pasos/  ----------
    ----------  /modulos-nativos/  -------------------------
    ----------  /09-http-basic.js  -------------------------
    --------------------------------------------------------
*/


console.clear();
console.log('------------------------------');
console.log('-----  09-http-basic.js  -----');
console.log('------------------------------\n\n');


/**
 * ----------------
 * - `Módulo HTTP`
 * ----------------
 * - El módulo HTTP nos permite crear servidores web y manejar solicitudes y respuestas HTTP.
 * - Es fundamental para construir aplicaciones web y APIs en Node.js.
 * - Proporciona funcionalidades para manejar métodos HTTP, rutas, encabezados y cuerpos de solicitudes y respuestas.
 * - Permite crear servidores web que pueden escuchar en puertos específicos y responder a las solicitudes entrantes.
 */

const http = require('node:http');


/** -----  Crear un servidor HTTP básico  -----  */
const server = http.createServer((req, res) => {

    console.log('request received');
    res.end('Hello World');

});


/** -----  Definir el puerto para el servidor HTTP  -----  */
let PORT = 0;


/** ----- Iniciar el servidor en un puerto específico  -----  */
server.listen(PORT, () => {
    

    /** -----  Obtener la dirección y el puerto en el que el servidor está escuchando  -----  */
    const address = server.address();
    
    /** -----  Obtener el puerto  -----  */
    const port = typeof address === 'string' ? parseInt(address) : address.port;
    
    //  -----  Mostrar el puerto en la consola  -----  
    console.log(`Server listenning on port ${port}`);
    console.log(`http://localhost:${port}`);

});
