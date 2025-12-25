/*
    --------------------------------------------------------
    ----------  /nodejs-desarrollos/  ----------------------
    ----------  /01-curso-nodejs-midudev/  -----------------
    ----------  /01-introduccion-primeros-pasos/  ----------
    ----------  /mjs/index.mjs  ----------------------------
    --------------------------------------------------------
*/


import { sum, sub, mult } from './sum.mjs';


/*  
    -------------------------------------------------
    -----  .js -> por defecto utiliza CommonJS  -----
    -----  .mjs -> para utilizar ES Modules  --------
    -----  .cjs -> para utilizar CommonJS  ----------
    -------------------------------------------------
*/



console.log(sum(1, 2));
console.log(sub(1, 2));
console.log(mult(1, 2));
