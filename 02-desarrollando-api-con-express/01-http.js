/*
    ----------------------------------------------------------
    ----------  /nodejs-desarrollos/  ------------------------
    ----------  /01-curso-nodejs-midudev/  -------------------
    ----------  /02-desarrollando-api-con-express/  ----------
    ----------  /01-http.js  ---------------------------------
    ----------------------------------------------------------
*/


console.clear();
console.log('------------------------');
console.log('-----  01-http.js  -----');
console.log('------------------------\n\n');


/**
 * --------------------------
 * ----- `Módulo HTTP`  -----
 * --------------------------
 * 
 * - El módulo HTTP nos permite crear servidores web y manejar solicitudes y respuestas HTTP.
 * - Es fundamental para construir aplicaciones web y APIs en Node.js.
 * - Proporciona funcionalidades para manejar métodos HTTP, rutas, encabezados y cuerpos de solicitudes y respuestas.
 * - Permite crear servidores web que pueden escuchar en puertos específicos y responder a las solicitudes entrantes.
 * 
 */

const http = require('node:http');


/**
 * --------------------------
 * ----- `Módulo FS`  -----
 * --------------------------
 * 
 * - El módulo FS (File System) nos permite interactuar con el sistema de archivos del servidor.
 * - Proporciona funcionalidades para leer, escribir, eliminar y manipular archivos y directorios.
 * - Es esencial para manejar datos persistentes en aplicaciones Node.js.
 * - Permite realizar operaciones de E/S de archivos de manera síncrona y asíncrona.
 */

const fs = require('node:fs');


/** -----  Mostrar las variables de entorno  -----  */
//console.log(process.env);


/** -----  Obtener el puerto deseado desde las variables de entorno o usar 3000 por defecto  -----  */
const desiredPort = process.env.PORT ?? 1234;


/**
 * ----------------------------------------
 * -----  `processRequest(req, res)`  -----
 * ----------------------------------------
 * 
 * - Función para procesar las solicitudes entrantes al servidor HTTP.
 * 
 * @param {http.IncomingMessage} req - Objeto que representa la solicitud entrante.
 * @param {http.ServerResponse} res - Objeto que representa la respuesta que se enviará al cliente.
 * 
 * 
 */

const proccessRequest = (req, res) => {


    /** -----  Establecer el encabezado Content-Type para todas las respuestas  ----- */
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    //  -----  ruta /  -----
    if (req.url === '/') {
        
        //  -----  Construir el contenido HTML de la respuesta  -----
        res.write(`
            <h1> HOME | Mi página </h1>
            <h2> Hola mundo desde mi servidor HTTP en Node.js </h2>
            <br> <hr>
            <a href="/"> home </a> <br>
            <a href="/imagen-super-bonita.png"> Imagen súper bonita </a> <br>
            <a href="/contacto"> Contacto </a>
            <br> <hr> <br>
        `);

        //  -----  Finalizar la respuesta  -----
        res.end();
    } 
    

    //  -----  ruta /imagen-super-bonita.png  -----
    else if (req.url === '/imagen-super-bonita.png') {
        

        //  -----  Leer el archivo de imagen de forma asíncrona  -----
        fs.readFile('./assets/img/placa.png', (err, data) => {
        
            //  -----  Manejar errores de lectura del archivo  -----
            if (err) {
                
                res.statusCode = 500;
                res.end('<h1> 500 Internal Server Error </h1>');

            //  -----  Enviar la imagen como respuesta  -----
            } else {
                
                //  -----  Establecer el encabezado Content-Type para la imagen  -----
                res.setHeader('Content-Type', 'image/png');

                //  -----  Enviar los datos de la imagen como respuesta  -----
                res.end(data);
            }

        });

    } 
    

    //  -----  ruta /contacto  -----
    else if (req.url === '/contacto') {
        
        //  -----  Construir el contenido HTML de la respuesta  -----
        res.write(`
            <h1> Contacto </h1>
            <h2> Página de Contacto desde mi servidor HTTP en Node.js </h2>
            <br> <hr>
            <a href="/"> home </a> <br>
            <a href="/imagen-super-bonita.png"> Imagen súper bonita </a> <br>
            <a href="/contacto"> Contacto </a>
            <br> <hr> <br>
        `);

        //  -----  Finalizar la respuesta  -----
        res.end();
        
    } 
    

    //  -----  ruta no encontrada  -----
    else {
        
        res.statusCode = 404; // Not Found
        
         //  -----  Construir el contenido HTML de la respuesta  -----
        res.write(`
            <h1> 404 | Not Found Page </h1>
            <h2> Página de Contacto desde mi servidor HTTP en Node.js </h2>
            <br> <hr>
            <a href="/"> home </a> <br>
            <a href="/imagen-super-bonita.png"> Imagen súper bonita </a> <br>
            <a href="/contacto"> Contacto </a>
            <br> <hr> <br>
        `);

        //  -----  Finalizar la respuesta  -----
        res.end();

    }

}


/** -----  Crear un servidor HTTP  -----  */
const server = http.createServer(proccessRequest);


/** -----  Iniciar el servidor en el puerto deseado  -----  */
server.listen(desiredPort, () => {
    console.log(`Server listening on port http://localhost:${desiredPort}`);
});
