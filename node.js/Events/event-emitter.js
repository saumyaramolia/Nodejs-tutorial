// Event Emitter

/* About Event Emitter:
    1. when we call the events module to our variable,
    our variable turns into a class instance.
    2. We can also have as many events as we want.
    3. We can also add arguments in the callbacks of the event emitter
*/

/* SIDENOTE bunch of modules relie on event emitters to check goto docs and the module &
    check for extends.
*/ 

const EventEmitter = require('events'); // class are denoted by green color

const customEventEmitter = new EventEmitter(); // Create a new instance

customEventEmitter.on('message', (name, age) => {
    console.log(`Hello ${name} and your age is ${age}`); // [3]
})
customEventEmitter.on('message', () => { // [2]
    console.log('Second event method'); 
})

customEventEmitter.emit('message', 'saumya', 20);

