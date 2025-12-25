/*
    --------------------------------------------------------
    ----------  /nodejs-desarrollos/  ----------------------
    ----------  /01-curso-nodejs-midudev/  -----------------
    ----------  /01-introduccion-primeros-pasos/  ----------
    ----------  /modulos-nativos/  -------------------------
    ----------  /04-fs-read-file-async-await.js  -----------
    --------------------------------------------------------
*/


console.clear();
console.log('--------------------------------------------');
console.log('-----  04-fs-read-file-async-await.js  -----');
console.log('--------------------------------------------\n\n');


/*  
    -------------------------------------------------------------
    -----  Leer archivos de forma asíncrona con async-await -----
    -------------------------------------------------------------
*/


// Esto sólo en los módulos nativos
// que no tienen promesas nativas

// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)

/**
 * Node.js desde la versión 10 incluye
 * una API basada en promesas para el sistema de archivos
 * https://nodejs.org/api/fs.html#fsreadfilepath-options-callback
 */

const { readFile } = require('node:fs/promises');


/**
 * ----------------------
 * -----  `init()`  -----
 * ----------------------
 * 
 * - Función asíncrona para leer archivos
 * 
 */

async function init () {
    
   
     //  ----- 1º Archivo -----
    console.log('\n\nLeyendo el primer archivo...\n\n');
    

    /** - `readFile(ruta, encoding)`:
     *   - Lee el contenido de un archivo de forma asíncrona
     *   - https://nodejs.org/api/fs.html#fsreadfilepath-options-callback
     */
    
    const text = await readFile('../archivos/archivo1.txt', 'utf-8');
    

    //  -----  Mostrar contenido del archivo 1 -----
    console.log('\n\nprimer texto:\n', text);


    //  -----  Hacer otras cosas mientras se lee el archivo  -----
    console.log('\n\n--> Hacer cosas mientras lee el archivo...\n\n');


    //  ----- 2º Archivo -----
    console.log('\n\nLeyendo el segundo archivo...\n\n');

    /** - `readFile(ruta, encoding)`:
     *   - Lee el contenido de un archivo de forma asíncrona
     *   - https://nodejs.org/api/fs.html#fsreadfilepath-options-callback
     */

    const secondText = await readFile('../archivos/archivo2.txt', 'utf-8');
    
    //  -----  Mostrar contenido del archivo 2 -----
    console.log('\n\nsegundo texto:\n', secondText);
    
}


init();
