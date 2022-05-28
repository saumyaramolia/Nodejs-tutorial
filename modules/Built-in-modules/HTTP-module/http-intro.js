// HTTP module

/* Here req(request) -> incoming request (it is client request form web -browser)
    res(response) -> outgoing response (server provides resources)
    r es, req are objects. 
*/

/* IMP NOTE to exexute the following code you need to do 2 things: 
    - execute in terminal this file "node <fileName>"
    - Then go to browser and "localhost:portNumber"
*/

const http = require('http');

const server1 = http.createServer((req,res) => {
    res.write('Hello Welcome to my humble Aboard. :)');
    res.end();
})

server1.listen(5000); // This is very important

/* In server.listen() we have input port number 
    Web-server always listen for requests.
*/

const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.end('Hello Welcome to my humble Aboard. :)');
    }

    if(req.url === '/about'){
        res.end('This is the About page');
    }

    res.end(`
        <h1> ERROR 404 </h1>
        <p> This page  is not found </p>
        <a href="/"> Home page </a>
    `)
})

server.listen(5000);
