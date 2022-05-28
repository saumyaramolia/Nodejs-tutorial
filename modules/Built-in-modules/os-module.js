// OS built-in-module

const os = require('os');

console.log(os.userInfo());
console.log(os.cpus());

const details = {
    release: os.release(),
    totalMemory: os.totalmem()
}

console.log(details);