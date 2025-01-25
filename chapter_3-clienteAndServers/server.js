const http = require('http'); // http built in module


// // The callback function will run when the server receives the request and it lauches this function to generrate a response
const server = http.createServer((request, response) => {
     console.log('request made');
     console.log(request);
});

//  In order to use this server, we have to prepare it to listen for request. The first argument is the port number of the server that it will listen, the second argument is the host name (the default is already localhost), and the last one is a callback funcion that fires everytime the server starts listening.
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
 })  

// When we use localhost (like a domain name on the web), it directs us to our own computer's IP. Therefore, the code is saying "listen to requests coming from our computer"

// Port number are like doors into a computer, gates where the server communicated through. --> localhost:3000


// At this point, the request was made. The request object (first parameter of the createServer function). We could access request.url, request.method(GET), since it's an object, we can access properties...
// What about the response? We need to use the response object.

// Formulate response headers, gives the browser info about the response, like the type (text...) and cookies


const server2 = http.createServer((request, response) => {
    console.log('request made');
    console.log(request);
    // Set header content type
    response.setHeader('Content-Type', 'text/plain');

    // Write content we want to response
    response.write('hello, ninjas'); // We could write as html: ('<p>hello, ninjas<p>'). We could use response.write more than once to send more information back as response.

    response.end(); // Sends response
});

server2.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
})  

// This is a very simples way to responde back to html. The ideal is to create the html page in other file and then make node read it.

const fs = require('fs');

const server3 = http.createServer((request, response) => {
    console.log('request made');
    console.log(request);
    // Set header content type
    response.setHeader('Content-Type', 'text/plain');

    // Send an html file
    fs.readFile('PATH TO THE FILE'), (err, data) => {
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



