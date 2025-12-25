/*
    --------------------------------------------------------
    ----------  /nodejs-desarrollos/  ----------------------
    ----------  /01-curso-nodejs-midudev/  -----------------
    ----------  /01-introduccion-primeros-pasos/  ----------
    ----------  /modulos-nativos/  -------------------------
    ----------  /01-os-info.mjs  ---------------------------
    --------------------------------------------------------
*/


/**
 * - `Módulo OS`
 * - Proporciona información sobre el sistema operativo
 * - https://nodejs.org/api/os.html
 * 
 * @type {import('node:os')}
 * 
 */

import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'


console.clear();
console.log('----------------------------');
console.log('-----  01-os-info.mjs  -----');
console.log('----------------------------\n\n');


console.log('-----------------------------------------------');
console.log('-----  Información del sistema operativo  -----');
console.log('-----------------------------------------------\n\n');

console.log('\n\nNombre del sistema operativo', platform())
console.log('\n\nVersión del sistema operativo', release())
console.log('\n\nArquitectura', arch())
console.log('\n\nCPUs', cpus())
console.log('\n\nMemoria libre', freemem() / 1024 / 1024)
console.log('\n\nMemoria total', totalmem() / 1024 / 1024)
console.log('\n\nuptime', uptime() / 60 / 60)