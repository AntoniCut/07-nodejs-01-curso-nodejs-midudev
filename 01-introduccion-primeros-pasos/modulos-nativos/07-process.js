/*
    --------------------------------------------------------
    ----------  /nodejs-desarrollos/  ----------------------
    ----------  /01-curso-nodejs-midudev/  -----------------
    ----------  /01-introduccion-primeros-pasos/  ----------
    ----------  /modulos-nativos/  -------------------------
    ----------  /07-process.js  ----------------------------
    --------------------------------------------------------
*/


console.clear();
console.log('---------------------------');
console.log('-----  07-process.js  -----');
console.log('---------------------------\n\n');



//  -----  argumentos de entrada  -----
console.log('process.argv => ', process.argv);


//  -----  controlar el proceso y su salida  -----
//  -----  exit code 0: éxito  -----
//  process.exit(0)

//  -----  exit code 1: error  -----
//  process.exit(1);

//  -----  podemos controlar eventos del proceso  -----
process.on('exit', () => {
  
    // limpiar los recursos
    console.log('\n\nEl proceso va a terminar, limpia consola en 5 segundos...\n\n');
       

})


//  -----  current working directory  -----
console.log('\n\nEn que carpeta estoy ejecutando el proceso? => ', process.cwd());

//  -----  platform  -----
console.log('\n\nplataforma => ', process.platform);

//  -----  env  -----
console.log('\n\nVariable de entorno => ', process.env);
