/*
    --------------------------------------------------------
    ----------  /nodejs-desarrollos/  ----------------------
    ----------  /01-curso-nodejs-midudev/  -----------------
    ----------  /01-introduccion-primeros-pasos/  ----------
    ----------  /modulos-nativos/  -------------------------
    ----------  /05-path.js  -------------------------------
    --------------------------------------------------------
*/


console.clear();
console.log('------------------------');
console.log('-----  05-path.js  -----');
console.log('------------------------\n\n');


/**
 * --------------------------------
 * -----  Módulo nativo Path  -----
 * --------------------------------
 * 
 * El módulo `path` proporciona utilidades para trabajar con rutas de archivos y directorios.
 * Permite manipular y resolver rutas de manera independiente del sistema operativo.
 * 
 * Documentación oficial: https://nodejs.org/api/path.html
 */
const path = require('node:path');


//  -----  barra separadora de carpetas segun SO  -----
console.log('barra separadora =>', path.sep);


/**  -----  unir rutas con path.join  ----- */
const filePath = path.join('antonydev-desarrollos', 'nodejs-desarrollos', '01-curso-nodejs-midudev', '01-introduccion-primeros-pasos', 'modulos-nativos' );

console.log('\n\nfilePath => ', filePath);


/**  -----  obtener ruta absoluta con path.resolve  ----- */
const absolute = path.resolve('antonydev-desarrollos', 'nodejs-desarrollos', '01-curso-nodejs-midudev', '01-introduccion-primeros-pasos', 'modulos-nativos' );

console.log('\n\nabsolute => ', absolute);


/**  -----  obtener el nombre del archivo con path.basename  ----- */
const base = path.basename('C:/antonydev-desarrollos/nodejs-desarrollos/01-curso-nodejs-midudev/01-introduccion-primeros-pasos/modulos-nativos/05-path.js');

console.log('\n\nbase => ', base);


/**  -----  obtener la extension del archivo con path.extname  ----- */
const ext = path.extname('C:/antonydev-desarrollos/nodejs-desarrollos/01-curso-nodejs-midudev/01-introduccion-primeros-pasos/modulos-nativos/05-path.js');

console.log('\n\next => ', ext);
