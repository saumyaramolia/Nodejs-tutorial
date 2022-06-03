// Event Loop

/* It helps and explains how nodejs can run asynchronously & have non-blocking I/O.
    as javascript runs on single thread & is synchronous.
*/

/* Event Loop executes process followingly:
    1. Accepts the users requests.
    2. Goes each request 1 after another.
    3. If the request will take time then it is registered in CB(callback).
    4. After each and every request is completed then it executed the CB.
*/

console.log('First request');

setTimeout(() => {
    console.log('Second request');
}, 0)

console.log('Third request');

// difference b/w setInterval & setTimeout

console.log('First request');

setInterval(() => {
    console.log('Second request');
}, 1000)

console.log('Third request');