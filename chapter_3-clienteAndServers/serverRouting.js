// Suppose I want the user to access different content depending on the path to the server.

const http = require('http'); // http built in module
const fs = require('fs');

const server3 = http.createServer((request, response) => {
    console.log('request made');
    console.log(request);
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

server3.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
}) 