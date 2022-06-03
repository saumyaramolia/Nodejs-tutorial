// Streams

/* About:
    Streams is used read/write squenceily.
    when data is big or to be done in large squence.
    4 types of streams:
        - Writable stream
        - Readable stream
        - Duplex (read+write)
        - Transform
    
    The data of the file will in streams (by default they will be of 64kb)
    and last buffer is always a reminder.
    1. You can encode and change the buffer size.
*/  

const {createReadStream} = require('fs');

const stream = createReadStream('./modules/Built-in-modules/content/big-text.txt', {highWaterMark: 90000, encoding: 'utf8'})


stream.on('data', (result) => {
    console.log(result);
})