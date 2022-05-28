/* npm is a package manager.
    to access various packages of npm 
    website is "npmjs.com" 
*/

/* There are 2 ways to download npm packages:
    Local dependency - used for particular project only.
        npm i <packageName>
        npm install <packageName>
    
    Global dependency - used for all projects.
        npm install <packageName>
        sudo npm install <packageName> (for mac just in case).
*/

/* package.json - Basically a manifest file for npm packages
    The use of package.json is written in file git-sideNote.txt.

    To access package.json there 3 ways but we will skip and only use:
        npm init -y (This creates everything for on default values)

        also each dependency you install is show in the folder called "npm_modules"
*/


// Actual syntax of how to use external packages (Basically same)

const _ = require('lodash'); // _ this is common convention
