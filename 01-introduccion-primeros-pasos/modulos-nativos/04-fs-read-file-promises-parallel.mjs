/*
    --------------------------------------------------------------
    ----------  /nodejs-desarrollos/  ----------------------------
    ----------  /01-curso-nodejs-midudev/  -----------------------
    ----------  /01-introduccion-primeros-pasos/  ----------------
    ----------  /modulos-nativos/  -------------------------------
    ----------  /04-fs-read-file-promises-parallel.mjs  ----------
    --------------------------------------------------------------
*/


import { readFile } from 'node:fs/promises';


console.clear();
console.log('---------------------------------------------------');
console.log('-----  04-fs-read-file-promises-parallel.mjs  -----');
console.log('---------------------------------------------------\n\n');


/*  
    -----------------------------------------------------------------------
    -----  Leer archivos de forma asíncrona con promises-parallel.mjs -----
    -----------------------------------------------------------------------
*/


//  -----  Hacer unas cosas mientras se leen los archivos -----
console.log('\n\n--> Hacer unas cosas mientras lee los archivos...\n\n');


//  -----  Leer archivos en paralelo -----
Promise.all([
    readFile('../archivos/archivo1.txt', 'utf-8'),
    readFile('../archivos/archivo2.txt', 'utf-8')
])
    .then(([primerText, secondText]) => {
        
        // Aquí ya tenemos los dos textos leídos
        console.log('primer texto:', primerText);
        console.log('segundo texto:', secondText);
    })


//  -----  Hacer otras cosas mientras se leen los archivos -----
console.log('\n\n--> Hacer otras cosas mientras lee los archivos...\n\n');
