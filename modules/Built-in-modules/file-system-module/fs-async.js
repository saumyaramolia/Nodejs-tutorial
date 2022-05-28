// Asyncronous

// Always add utf-8 or else you will buffer value 

/* In Async the porcess gets executed and droped so that next user can access the app rather then waiting
    for it to finish. 
    As you can see The output.
*/

const {
    readFile,
    writeFile
} = require('fs');

console.log('Start the process');

readFile('/Users/saumyaramolia/OneDrive/MERN/NodeJS/modules/Built-in-modules/content/first.txt', 'utf8', (err, result) => {
    if (err) throw err;
    console.log(result);

    const first = result;

    readFile('/Users/saumyaramolia/OneDrive/MERN/NodeJS/modules/Built-in-modules/content/second.txt', 'utf8', (err, result) => {
        if (err) throw err;
        console.log(result);

        const second = result;

        writeFile('/Users/saumyaramolia/OneDrive/MERN/NodeJS/modules/Built-in-modules/content/result.txt', `HI ${first} and ${second}`, (err, result) => {
            if (err) throw err;
            console.log(result);
        })
        console.log('Done the process');
    })
})
console.log('Start the next one');