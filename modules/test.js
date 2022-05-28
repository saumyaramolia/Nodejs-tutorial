// Modules 

/* Key Points to remember:
    - All files are Modules in node
    - Each module can specify what to export (may it be variables or functions,etc)
    - to export use "module.export = whatToExport" 
    - To use the exported functions/anything use "const var = require("./fileName")"
*/

const names  = require('./names');
const greetings = require('./compute');

greetings(names.ashay)
greetings(names.dhaval)
// sayBye(names.ashay)