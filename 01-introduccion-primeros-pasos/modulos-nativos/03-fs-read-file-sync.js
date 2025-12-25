/*
    --------------------------------------------------------
    ----------  /nodejs-desarrollos/  ----------------------
    ----------  /01-curso-nodejs-midudev/  -----------------
    ----------  /01-introduccion-primeros-pasos/  ----------
    ----------  /modulos-nativos/  -------------------------
    ----------  /03-fs-read-file-sync.js  ------------------
    --------------------------------------------------------
*/


console.clear();
console.log('-------------------------------------');
console.log('-----  03-fs-read-file-sync.js  -----');
console.log('-------------------------------------\n\n');


/** ----- `Módulo FS` ----  */
const fs = require('node:fs');


/*  
    --------------------------------------------
    -----  Leer archivos de forma síncrona -----
    --------------------------------------------
*/


//  ----- 1º Archivo -----
console.log('\n\n-----  Leyendo el primer archivo...');


/** ----- Lee el contenido de un archivo de forma síncrona  -----  */
const primerText = fs.readFileSync('../archivos/archivo1.txt', 'utf-8');


//  -----  Mostrar contenido del archivo 1 -----
console.log('\nprimer texto:\n', primerText);


//  -----  Hacer otras cosas mientras se lee el archivo  -----
console.log('\n\n--> Hacer cosas mientras lee el archivo...\n\n')


//  ----- 2º Archivo -----
console.log('\n\n-----  Leyendo el segundo archivo...')


/** ----- Lee el contenido de un archivo de forma síncrona  -----  */
const secondText = fs.readFileSync('../archivos/archivo2.txt', 'utf-8')


//  -----  Mostrar contenido del archivo 2 -----
console.log('\nsegundo texto:\n', secondText);