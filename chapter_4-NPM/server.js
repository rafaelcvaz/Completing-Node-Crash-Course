// So far, if I implement a change in the code, I have to restart the server. That means I have to run node FILENAME, then use localhost:3000 in the URL of the browser. 
// If I want to make a change in the code without having to restart the server, we could use a NPM packeage called nodemon (instructions in npm website)
// Now, i call the server with nodemon FILENAME... The packeage file is a json file.

// The file packeage.json in this folder was created using npm init and pressing enter for all options to set default values. This file will organize the dependencies,
// such as third-party modules - example: loadash

// I downloaded loadash with npm install loadash, that created the folder node_modules and package files.

const _ = require('loadash');

const http = require('http'); // http built in module
const fs = require('fs');

const server = http.createServer((request, response) => {

    //loadash
    const num = _.random(0, 20); // Get's a random number (between 0 and 20) everytime this function run

    const greet = _.once(() => { // The .once method garantees this function will only run once, even if I use greet() twice.
        console.log('hello'); ;;
    });
    
    // Set header content type
    response.setHeader('Content-Type', 'text/plain');

    // Sets the possibility to edit the path depending on what the user types in the url
    let path = 'PATH WHERE THE POSSIBLE HTML FILES YOU WANT THE USER TO ACCESS ARE';
    switch(request.url) {
        case '/':
            path += 'index.html'; //If the user types the default url, without anything after the /, visit the index (default page)
            response.statusCode = 200;
            break;
        case '/about':
            path += 'about.html'; //A possible path 
            response.statusCode = 200;
            break;
        case '/about-me': // Suppose I want to redirect this to /about
            response.statusCode = 301;
            response.setHeader('Location', '/about');
            response.end();
            break;
        default:
            path += '404.html'; //Error case, the user visits it if it types a path that doesn't exist.
            response.statusCode = 404;
            break;
    }

    // Send an html file
    fs.readFile('path'), (err, data) => {
        if (err) {
            console.log(err);
            response.end();
        } else {
            response.write(data);
            response.end();
        }
    }
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
}) 