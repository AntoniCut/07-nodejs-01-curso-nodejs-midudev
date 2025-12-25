/*
    --------------------------------------------------------
    ----------  /nodejs-desarrollos/  ----------------------
    ----------  /01-curso-nodejs-midudev/  -----------------
    ----------  /01-introduccion-primeros-pasos/  ----------
    ----------  /modulos-nativos/  -------------------------
    ----------  /06-ls-basic.js  ---------------------------
    --------------------------------------------------------
*/


console.clear();
console.log('----------------------------');
console.log('-----  06-ls-basic.js  -----');
console.log('----------------------------\n\n');


/**
 * - Módulo nativo `FS` de Node.js
 * - Proporciona una API para interactuar con el sistema de archivos
 * - Documentación: https://nodejs.org/api/fs.html
 */

const fs = require('node:fs');


/** -----  Leer el contenido del directorio actual (.)  -----  */
fs.readdir('.', (err, files) => {

    //  -----  Manejo de errores  -----
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    console.log('Files in current directory:');
    
    //  -----  Listar los archivos  -----
    files.forEach(file => {
        console.log('- ', file);
    });

});
