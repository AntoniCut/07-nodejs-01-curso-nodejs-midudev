/*
    --------------------------------------------------------
    ----------  /nodejs-desarrollos/  ----------------------
    ----------  /01-curso-nodejs-midudev/  -----------------
    ----------  /01-introduccion-primeros-pasos/  ----------
    ----------  /modulos-nativos/  -------------------------
    ----------  /10-free-port.js  --------------------------
    --------------------------------------------------------
*/


console.clear();
console.log('-----------------------------');
console.log('-----  10-free-port.js  -----');
console.log('-----------------------------\n\n');


/**
 * -------------------------
 * ----- `Módulo NET`  -----
 * -------------------------
 * 
 * - El módulo NET proporciona una API para crear servidores y clientes TCP/IPC.
 * - Permite la comunicación a través de sockets, lo que es útil para aplicaciones de red.
 * - Se utiliza para crear servidores TCP personalizados y manejar conexiones de red.
 * 
 */

const net = require('node:net');

/**
 * ----------------------------------------------
 * -----  `findAvailablePort(desiredPort)`  -----
 * ----------------------------------------------
 *  
 * - Busca un puerto disponible comenzando desde el puerto deseado.
 * - Si el puerto está en uso, intenta con el siguiente puerto disponible.
 * - Devuelve una promesa que se resuelve con el puerto disponible encontrado.
 * 
 * @param {string|number} desiredPort 
 * 
 * @returns {Promise<number>}
 */

function findAvailablePort(desiredPort) {

    
    return new Promise((resolve, reject) => {

        
        /**
         * - Creates a new TCP server instance using the net module.
         * - The server can be configured to listen on a specific port and handle incoming connections.
         * @type {net.Server}
         */
        const server = net.createServer();


        /** ----- Iniciar el servidor en un puerto específico  -----  */
        server.listen(desiredPort, () => {


            /** -----  Obtener la dirección y el puerto en el que el servidor está escuchando  -----  */
            const address = server.address();


            /** -----  Obtener el puerto  -----  */
            const port = typeof address === 'string' ? parseInt(address) : address.port;

            
            /** -----  cerrar el servidor  -----  */
            server.close(() => {
                resolve(port);
            });

        });



        /** -----  Manejar errores al iniciar el servidor  -----  */
        server.on('error', (err) => {
            
            if (err && typeof err === 'object' && 'code' in err && err.code === 'EADDRINUSE') {
            
                console.log(`Port ${desiredPort} is in use, trying another port...`);

                findAvailablePort(0)
                    .then(port => resolve(port))
            }

            else 
                
                reject(err)
            
        })


    });

}


module.exports = { findAvailablePort };
