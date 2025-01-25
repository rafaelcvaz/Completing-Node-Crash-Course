const express = require('express'); // Import the module

// Express app - creates an instance of the express app
const app = express();

// Listen for requests
app.listen(3000); // It can also returns an instance of the response of the server

// For listening to request, we can use the get method. First argument is the path we want to listen, and the second one is the function it will call.
app.get('/', (req, res) => {

    res.send('<p>home page</p>'); // It infers the type of content we're trying to send to the browser and already sets a header. It also infers the status code. As argument, we use the content we want to send (could be html)

}); 

app.get('/about', (req, res) => {

    res.sendFile('RELATIVE PATH', { root: __dirname  }); // To send files, the 1st argument is the relative path, the second is where is the root from where the relative path is considered.

}); 

// How to redirect an user? From /about-us to /about

app.get('/about-us', (req, res) => {
    res.redirect('/about');
});


// 404 page - If we don't define the status here, since we don't define it based on a specific URL, it will try to match every request we made above, and if it doesn't fit, it will run the code below.
app.use((req, res) => {
    res.status(404).sendFile('RELATIVE PATH TO A 404 PAGE', { root: __dirname  });
});