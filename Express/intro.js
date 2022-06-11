// Introduction 

/* Express is built on top of node.js (more specifically on top of http module). 
    To install express first always check if you have package.json in your project
    if there is then goto terminal and type "npm install/i express"
*/ 

/*  Express methods:
    1. app.get ()
    2. app.post ()
    3. app.all ()
    4. app.listen ( just like server.listen() )
    5. app.use(example used in )
 */

const express = require('express')

const app = express();

app.get('/', (req, res) => {                //[1]
    res.send('Hello World')
})

app.all('*', (req, res) => {                //[3]
    res.status(404).send('Not Found')
})

app.listen(5000, () => {                   //[4]
    console.log('Express listening')
})