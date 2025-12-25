/*
    --------------------------------------------------------
    ----------  /nodejs-desarrollos/  ----------------------
    ----------  /01-curso-nodejs-midudev/  -----------------
    ----------  /01-introduccion-primeros-pasos/  ----------
    ----------  /modulos-nativos/  -------------------------
    ----------  /06-ls-promises.js  ------------------------
    --------------------------------------------------------
*/


console.clear();
console.log('-------------------------------');
console.log('-----  06-ls-promises.js  -----');
console.log('----------------------------\n\n');


/**
 * - Módulo nativo `FS` de Node.js
 * - Proporciona una API para interactuar con el sistema de archivos
 * - Documentación: https://nodejs.org/api/fs.html
 */

const fs = require('node:fs/promises');

//  -----  Leer el contenido del directorio actual (.)  -----
console.log('Files in current directory:');


/** -----  Leer el contenido del directorio actual (.)  -----  */
fs.readdir('.')
    
    .then(files => {
        files.forEach(file => {
            console.log('- ', file)
        })
    })
    
    .catch(err => {
        if (err) {
            console.error('Error al leer el directorio: ', err)
            return;
        }
    })
