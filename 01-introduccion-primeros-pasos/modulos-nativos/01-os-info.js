/*
    --------------------------------------------------------
    ----------  /nodejs-desarrollos/  ----------------------
    ----------  /01-curso-nodejs-midudev/  -----------------
    ----------  /01-introduccion-primeros-pasos/  ----------
    ----------  /modulos-nativos/  -------------------------
    ----------  /01-os-info.js  ----------------------------
    --------------------------------------------------------
*/


console.clear();
console.log('---------------------------');
console.log('-----  01-os-info.js  -----');
console.log('---------------------------\n\n');


/**
 * - `Módulo OS`
 * - Proporciona información sobre el sistema operativo
 * - https://nodejs.org/api/os.html
 * 
 * @type {import('node:os')}
 * 
 */

const os = require('node:os');


console.log('-----------------------------------------------');
console.log('-----  Información del sistema operativo  -----');
console.log('-----------------------------------------------\n\n');

console.log('\n\nNombre del sistema operativo', os.platform())
console.log('\n\nVersión del sistema operativo', os.release())
console.log('\n\nArquitectura', os.arch())
console.log('\n\nCPUs', os.cpus())
console.log('\n\nMemoria libre', os.freemem() / 1024 / 1024)
console.log('\n\nMemoria total', os.totalmem() / 1024 / 1024)
console.log('\n\nuptime', os.uptime() / 60 / 60)