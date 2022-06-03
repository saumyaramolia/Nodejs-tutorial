// As NodeJs doesn't have window

// We us GLOBALS instead to access them anywhere we want

/*  - __dirname  - path to current directory
    - __filename - file name
    - require    - function to use modules (CommonJS) //used in modules 
    - module     - info about current module (file) //used in modules
    - process    - info about env where the program is being executed
*/

console.log(__dirname);
console.log(__filename);
// console.log(process);

setInterval(() => {
    console.log('First Rodeo');
},1000)

