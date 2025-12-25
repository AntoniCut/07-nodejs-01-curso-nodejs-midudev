/*
    --------------------------------------------------------
    ----------  /nodejs-desarrollos/  ----------------------
    ----------  /01-curso-nodejs-midudev/  -----------------
    ----------  /01-introduccion-primeros-pasos/  ----------
    ----------  /modulos-nativos/  -------------------------
    ----------  /09-http-advanced.js  ----------------------
    --------------------------------------------------------
*/


console.clear();
console.log('---------------------------------');
console.log('-----  09-http-advanced.js  -----');
console.log('---------------------------------\n\n');


/**
 * - `Módulo HTTP`
 * ----------------
 * - El módulo HTTP nos permite crear servidores web y manejar solicitudes y respuestas HTTP.
 * - Es fundamental para construir aplicaciones web y APIs en Node.js.
 * - Proporciona funcionalidades para manejar métodos HTTP, rutas, encabezados y cuerpos de solicitudes y respuestas.
 * - Permite crear servidores web que pueden escuchar en puertos específicos y responder a las solicitudes entrantes.
 */

const http = require('node:http');


/** -----  Importar la función findAvailablePort desde el archivo 10-free-port.js  -----  */
const { findAvailablePort } = require('./10-free-port');


/** -----  Mostrar las variables de entorno  -----  */
//console.log(process.env);


/** -----  Obtener el puerto deseado desde las variables de entorno o usar 3000 por defecto  -----  */
const desiredPort = process.env.PORT ?? 3000;


/** -----  Crear un servidor HTTP básico  -----  */
const server = http.createServer((req, res) => {

    console.log('request received');
    res.end('Hello World');

});


/** -----  Buscar un puerto disponible y arrancar el servidor  -----  */
findAvailablePort(desiredPort)
    
    .then((port) => {

        server.listen(port, () => {
            console.log(`Server listening on port http://localhost:${port}`);
        });

    })
