// HTTP module

/* Here req(request) -> incoming request (it is client request form web -browser)
    res(response) -> outgoing response (server provides resources)
    r es, req are objects. 
*/

/* IMP NOTE to exexute the following code you need to do 2 things: 
    - execute in terminal this file "node <fileName>"
    - Then go to browser and "localhost:portNumber"
    - portNumbers between 0 to 1024 are unavailable
*/

const http = require('http');

const server1 = http.createServer((req,res) => {
    res.write('Hello Welcome to my humble Aboard. :)');
    res.end();
})

server1.listen(5000); // This is very important (& Also listen() is asynchronous)

/* In server.listen() we have input port number 
    Web-server always listen for requests.
*/

const server2 = http.createServer((req,res) => {
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

server2.listen(5000);

// Http request object + how to display html file using node.js 

/* In this case it only show html not the logo, css, svg, etc. 
    to achieve that we have to add each of the following like this [1]
*/

const http = require('http')
const {readFileSync} = require('fs')

const indexPage = readFileSync('./navbar-app/index.html')
const indexCss = readFileSync('./Express/public/styles.css') //[1]

const server3 = http.createServer((req,res) => {
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html; charset= utf-8'}) 
        res.write(indexPage)
        res.end()
    }
    else if(req.url === '/styles.css'){                                     //[1]
        res.writeHead(200, {'Content-Type': 'text/css; charset= utf-8'}) 
        res.write(indexCss)
        res.end()
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html; charset= utf-8'}) 
        res.write('<h1>Page not found</h1>')
        res.end()
    }
    
})

server3.listen(5000)