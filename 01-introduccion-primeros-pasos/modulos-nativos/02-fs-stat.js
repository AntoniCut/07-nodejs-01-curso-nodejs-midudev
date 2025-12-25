/*
    --------------------------------------------------------
    ----------  /nodejs-desarrollos/  ----------------------
    ----------  /01-curso-nodejs-midudev/  -----------------
    ----------  /01-introduccion-primeros-pasos/  ----------
    ----------  /modulos-nativos/  -------------------------
    ----------  /02-fs-stat.js  ----------------------------
    --------------------------------------------------------
*/


console.clear();
console.log('---------------------------');
console.log('-----  02-fs-stat.js  -----');
console.log('---------------------------\n\n');


/**
 * - `Módulo FS`
 * - Proporciona información sobre el sistema de archivos
 * - https://nodejs.org/api/fs.html
 * @type {import('node:fs')}
 * 
 */

const fs = require('node:fs');


/**
 * - `fs.statSync(ruta)`:
 *   - Devuelve información sobre el archivo o directorio en la ruta especificada
 *   - https://nodejs.org/api/fs.html#fsstatpath-options
 *  
 */
const stats = fs.statSync('../archivos/archivo1.txt');


console.log('-------------------------------------------------');
console.log('-----  Información del sistema de archivos  -----');
console.log('-------------------------------------------------\n\n');

console.log(
    '\nEs un Fichero? =>', stats.isFile(), // si es un fichero
    '\nEs un Directorio? =>', stats.isDirectory(), // si es un directorio
    '\nEs un Enlace Simbólico? =>', stats.isSymbolicLink(), // si es un enlace simbólico
    '\nTamaño en bytes =>', stats.size // tamaño en bytes
);
