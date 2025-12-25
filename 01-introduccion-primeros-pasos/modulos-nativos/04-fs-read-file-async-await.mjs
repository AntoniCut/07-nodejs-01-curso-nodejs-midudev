/*
    --------------------------------------------------------
    ----------  /nodejs-desarrollos/  ----------------------
    ----------  /01-curso-nodejs-midudev/  -----------------
    ----------  /01-introduccion-primeros-pasos/  ----------
    ----------  /modulos-nativos/  -------------------------
    ----------  /04-fs-read-file-async-await.mjs  ----------
    --------------------------------------------------------
*/


import { readFile } from 'node:fs/promises';


console.clear();
console.log('---------------------------------------------');
console.log('-----  04-fs-read-file-async-await.mjs  -----');
console.log('---------------------------------------------\n\n');


/*  
    -----------------------------------------------------------------
    -----  Leer archivos de forma asíncrona con async-await mjs -----
    -----------------------------------------------------------------
*/

//  -----  Leer archivo 1 -----
console.log('\n\nLeyendo el primer archivo...\n\n');

/**
 * - `readFile(ruta, encoding)`:
 *  - Lee el contenido de un archivo de forma asíncrona
 */

const primerText = await readFile('../archivos/archivo1.txt', 'utf-8');


//  -----  Mostrar el contenido del archivo 1  -----
console.log('\n\nprimer texto:\n', primerText);


//  -----  Hacer otras cosas mientras se lee el archivo -----
console.log('\n\n--> Hacer cosas mientras lee el archivo...\n\n');


//  -----  Leer archivo 2 -----
console.log('\n\nLeyendo el segundo archivo...\n\n');

/**
 * - `readFile(ruta, encoding)`:
 *  - Lee el contenido de un archivo de forma asíncrona
 */

const secondText = await readFile('../archivos/archivo2.txt', 'utf-8');

//  -----  Mostrar el contenido del archivo 2  -----
console.log('\n\nsegundo texto:\n', secondText);
