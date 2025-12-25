/*
    --------------------------------------------------------
    ----------  /nodejs-desarrollos/  ----------------------
    ----------  /01-curso-nodejs-midudev/  -----------------
    ----------  /01-introduccion-primeros-pasos/  ----------
    ----------  /modulos-nativos/  -------------------------
    ----------  /08-ls-advanced.js  ------------------------
    --------------------------------------------------------
*/


console.clear();
console.log('-------------------------------');
console.log('-----  08-ls-advanced.js  -----');
console.log('-------------------------------\n\n');


/**
 * - Módulo externo `picocolors`
 * - Proporciona colores para la consola
 * - Documentación: https://www.npmjs.com/package/picocolors
 */

const pc = require('picocolors');


/**
 * - Módulo nativo `FS` de Node.js
 * - Proporciona una API para interactuar con el sistema de archivos
 * - Documentación: https://nodejs.org/api/fs.html
 */

const fs = require('node:fs/promises');


/**
 * - Módulo nativo `PATH` de Node.js
 * - Proporciona utilidades para trabajar con rutas de archivos y directorios
 * - Documentación: https://nodejs.org/api/path.html
 * 
 */

const path = require('node:path');



/**
 * - Obtener el directorio desde los argumentos de la línea de comandos
 * - Si no se proporciona, usar el directorio actual '.'
 * 
 * @type {string}
 */

const folder = process.argv[2] ?? '.';


/**
 * --------------------------
 * -----  `ls(folder)`  -----
 * --------------------------
 * 
 * - Lista los archivos de un directorio con información avanzada
 * 
 * @param {string} folder 
 * 
 * @return {Promise<void>}
 * 
 */

async function ls(folder) {


    /**
     * - Leer el contenido del directorio
     * @type {string[]}
     */

    let files;

    try {

        files = await fs.readdir(folder);

    } catch (error) {

        console.error(pc.red(`❌ No se pudo leer el directorio o archivo ${folder}`));
        process.exit(1);
    }


    /**
     * - Obtener información avanzada de cada archivo
     * - Usamos `Promise.all` para esperar a que todas las promesas se resuelvan
     * 
     * @type {Promise<string>[]}
     * 
     * @return {string[]}
     */

    const filesPromises = files.map(async (file) => {

        /**
         * - Ruta completa del archivo
         * @type {string}
         */
        
        const filePath = path.join(folder, file);


       
        /**
         * - Información del archivo 
         * @type {import('node:fs').Stats} 
         */
        
        let stats;

        try {
            
            stats = await fs.stat(filePath) // status - información del archivo

        } catch {
            
            console.error(pc.red(`No se pudo leer el archivo ${filePath}`))
            process.exit(1)
        }


        /**
         * - Tipo de archivo: directorio o archivo regular
         * @type {boolean}
         */
        
        const isDirectory = stats.isDirectory();


        /**
         * - Formatear la información del archivo
         * @type {string}
         */
        
        const fileType = isDirectory ? 'd' : 'f';


        /**
         * - Tamaño del archivo en bytes
         * @type {string}
         */
        
        const fileSize = stats.size.toString();


        /**
         * - Fecha de la última modificación
         * @type {string}
         */

        const fileModified = stats.mtime.toLocaleString();

        return `${pc.bgMagenta(fileType)} - ${pc.blue(file.padEnd(40))} - ${pc.green(fileSize.padStart(10))} bytes - ${pc.yellow(fileModified)}`

    })


    /**
     * - Esperar a que todas las promesas se resuelvan
     * - Obtener la información formateada de los archivos
     * @type {string[]}
     */

    const filesInfo = await Promise.all(filesPromises);

    
    //  -----  iterar e imprimir la información de los archivos por consola  -----
    filesInfo.forEach(fileInfo => {
        console.log(fileInfo);
    });

    console.log('\n\n\n\n\n');


}


ls(folder);
