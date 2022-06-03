// File System module

/* 2 ways to do so 
    - Asyncronously (non-blocking)
    - syncronously (blocking)
*/

/* KEY NOTE to remember this works only if the code in written in root/base(app.js,globals.js) dir 
    donot know why though.
    And always add utf-8

    NOTE to solve the above problem either use path "__dirname" and its function "resolve"
    or just use absolute directory name of file.
*/

/* In Case of sync it executes line by line so the other users have to wait */

const {readFileSync,writeFileSync} = require('fs');

console.log('Start the process');

const file = readFileSync('/Users/saumyaramolia/OneDrive/MERN/NodeJS/modules/Built-in-modules/content/first.txt', 'utf8');
const data = readFileSync('/Users/saumyaramolia/OneDrive/MERN/NodeJS/modules/Built-in-modules/content/second.txt', 'utf8');
console.log(file, data);

// writeFileSync('/Users/saumyaramolia/OneDrive/MERN/NodeJS/modules/Built-in-modules/content/first.txt', 'Hello World'); //This can also overwrite.

// if want to append 
writeFileSync('/Users/saumyaramolia/OneDrive/MERN/NodeJS/modules/Built-in-modules/content/result.txt', 'Hello World', {
    flags: 'a'
});

console.log('Done the process');
console.log('Start the next one');

