/* 
    ------------------------------------------------------ 
    ---------- /nodejs-desarrollos/ ---------------------- 
    ---------- /01-curso-nodejs-midudev/ ----------------- 
    ---------- /01-introduccion-primeros-pasos/ ---------- 
    ---------- /modulos-nativos/ ------------------------- 
    ---------- /04-fs-read-file-promises.mjs ------------- 
    ------------------------------------------------------ 
*/


import fs from 'node:fs';
import { promisify } from 'node:util';


console.clear();
console.log('-----------------------------------------');
console.log('-----  04-fs-read-file-promises.mjs  -----');
console.log('------------------------------------------\n\n');


/**
 * - `util.promisify()`:
 *   - Convierte funciones basadas en callbacks a funciones que devuelven promesas
 *   - https://nodejs.org/api/util.html#utilpromisifyoriginal
 * 
 */

const readFilePromise = promisify(fs.readFile);


//  ----- 1º Archivo -----
console.log('\nLeyendo el primer archivo...\n');


/**  - `fs.readFile(ruta, encoding)`:
 *   - Lee el contenido de un archivo de forma asíncrona
 *   - https://nodejs.org/api/fs.html#fsreadfilepath-options-callback
 */

readFilePromise('../archivos/archivo1.txt', 'utf-8')
    .then(text => {
        console.log('\nprimer texto:\n', text);
    });


//  -----  Esto se ejecuta sin esperar al archivo  -----
console.log('\n\n--> Hacer cosas mientras lee el archivo...\n\n');


//  ----- 2º Archivo -----
console.log('\nLeyendo el segundo archivo...\n');


/**
 * - `fs.readFile(ruta, encoding)`:
 *  - Lee el contenido de un archivo de forma asíncrona
 *  - https://nodejs.org/api/fs.html#fsreadfilepath-options-callback
 */

readFilePromise('../archivos/archivo2.txt', 'utf-8')
    .then(text => {
        console.log('\nsegundo texto:\n', text);
    });
