/*
    --------------------------------------------------------
    ----------  /nodejs-desarrollos/  ----------------------
    ----------  /01-curso-nodejs-midudev/  -----------------
    ----------  /01-introduccion-primeros-pasos/  ----------
    ----------  /modulos-nativos/  -------------------------
    ----------  /04-fs-read-file-promises.js  --------------
    --------------------------------------------------------
*/


console.clear();
console.log('-----------------------------------------');
console.log('-----  04-fs-read-file-promises.js  -----');
console.log('-----------------------------------------\n\n');


/*  
    ----------------------------------------------------------
    -----  Leer archivos de forma asíncrona con promises -----
    ----------------------------------------------------------
*/


// Esto sólo en los módulos nativos
// que no tienen promesas nativas

// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)

/**
 * - `fs.promises`:
 *   - Proporciona una API basada en promesas para el módulo FS
 *   - https://nodejs.org/api/fs.html#fspromisesapi
 *  
 */

const fs = require('node:fs/promises');


//  ----- 1º Archivo -----
console.log('\nLeyendo el primer archivo...\n');


/**
 * - `fs.readFile(ruta, encoding)`:
 *   - Lee el contenido de un archivo de forma asíncrona
 *   - https://nodejs.org/api/fs.html#fsreadfilepath-options-callback
 */

fs.readFile('../archivos/archivo1.txt', 'utf-8')
    .then(text => {
        console.log('\nprimer texto:\n', text);
    })



//  -----  Hacer otras cosas mientras se lee el archivo -----
console.log('\n\n--> Hacer cosas mientras lee el archivo...\n\n');


//  ----- 2º Archivo -----
console.log('\nLeyendo el segundo archivo...\n');


/** * - `fs.readFile(ruta, encoding)`:
 *   - Lee el contenido de un archivo de forma asíncrona
 *   - https://nodejs.org/api/fs.html#fsreadfilepath-options-callback
 */

fs.readFile('../archivos/archivo2.txt', 'utf-8')
    .then(text => {
        console.log('\nsegundo texto:\n', text);
    });
