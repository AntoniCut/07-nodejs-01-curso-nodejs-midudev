/*
    --------------------------------------------------------
    ----------  /nodejs-desarrollos/  ----------------------
    ----------  /01-curso-nodejs-midudev/  -----------------
    ----------  /01-introduccion-primeros-pasos/  ----------
    ----------  /cjs/index.js  -----------------------------
    --------------------------------------------------------
*/

//  -----  CommonJS require module  -----

/**
 * - Importa el módulo sum desde el archivo sum.js
 * - Utiliza la sintaxis de CommonJS (require)
 */
const { sum } = require('./sum');


/** -----  almacena el resultado que devuelve la función suma ----- */
const result = sum(2, 3);


console.log(result);
