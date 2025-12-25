/*
    -----------------------------------------------------------
    ----------  /nodejs-desarrollos/  -------------------------
    ----------  /01-curso-nodejs-midudev/  --------------------
    ----------  /01-introduccion-primeros-pasos/  -------------
    ----------  /modulos-nativos/  ----------------------------
    ----------  /04-fs-read-file-async-callbacks.js  ----------
    -----------------------------------------------------------
*/


console.clear();
console.log('------------------------------------------------');
console.log('-----  04-fs-read-file-async-callbacks.js  -----');
console.log('------------------------------------------------\n\n');


/** -----  `Módulo FS`  ----- */
const fs = require('node:fs');


/*  
    ---------------------------------------------
    -----  Leer archivos de forma asíncrona -----
    ---------------------------------------------
*/


//  ----- 1º Archivo -----
console.log('\n\n-----  Leyendo el primer archivo...');

/**  -----  Lee el contenido de un archivo de forma asíncrona  -----  */
fs.readFile('../archivos/archivo1.txt', 'utf-8', (err, data) => {
    

    //  -----  Manejo de errores -----
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }
    
    //  -----  Mostrar el contenido del archivo  -----
    console.log('\nprimer texto:\n', data);

});


//  -----  Hacer otras cosas mientras se lee el archivo -----
console.log('\n\n--> Hacer cosas mientras lee el archivo...\n\n');


//  ----- 2º Archivo -----
console.log('\n\n-----  Leyendo el segundo archivo...');


/**  -----  Lee el contenido de un archivo de forma asíncrona  -----  */
fs.readFile('../archivos/archivo2.txt', 'utf-8', (err, data) => {
    
    //  -----  Manejo de errores -----
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    console.log('\nsegundo texto:\n', data);

});
