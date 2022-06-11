// Done using express instead of HTTP module

/* CAUTION always use path.resolve when addressing a file
    to use all css,js & svg,etc files put them all in public folder (this is convention you can change it if you want)
    and public folder should be in root directory.
 */

/* IMPORTANT NOTE there are 2 ways to send a file (html):
    1. Is by putting the index.html file in public folder & removing line (20-22) //This is used for static Webapps
    2. Or by templating // This is when dealing with templating or Dynamic webapps
 */


    const express = require('express');
    const path = require('path');
    
    const app = express();
    
    app.use(express.static('./public'))
    
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
    });
    
    app.all('*', (req, res) => {
        res.status(404).send('Not Found');
    });
    
    app.listen(3000)