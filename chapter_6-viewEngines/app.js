// First, ran on the terminal: npm install ejs

const express = require('express'); // Import the module

// Express app - creates an instance of the express app
const app = express();

// Register view engine - EJS brings templates to insert javascript in html files in a dynamic. All of the ejs files must be stores inside a folder called views
// EJS templates are processed throgh the EJS view engine on the server. This is called server side rendering.

app.set('view engine', 'ejs');

// Listen for requests
app.listen(3000); // It can also returns an instance of the response of the server

// We can pass data through ejs files using the <% %> notation to write javascript inside the ejs files. Here, we can invoque or define some javascript code that we'll access here or in the ejs files.
app.get('/', (req, res) => {
    const blogs = [
      {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
    res.render('index', { title: 'Home', blogs }); // it's actually blogs: blogs
  });

app.get('/about', (req, res) => {

    res.render('about', { title: 'About' });

}); 

app.get('/blogs/creat', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
});

// 404 page - If we don't define the status here, since we don't define it based on a specific URL, it will try to match every request we made above, and if it doesn't fit, it will run the code below.
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});


// Partials:
// The partials are files to make this servers processing more simple, it stores the blocks of html code that would be repeated a lot of times in ejs files.
// Partial are templates that can be used in different views. To include them, we use the <%- %> notation with the include('RELATIVE PATH OF THE PARTIAL FILE') function
// We use the - instead of = because the = ignores special text, so it would consider the relative file as a string.

// CSS:
// We could add a <style> in the head.ejs file.