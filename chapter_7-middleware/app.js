// Middleware is any code that tuns in the server between the request and the response. The app.use(func) is usually used for this, there could also be more than one piece of middleware. For example: that app.get('/', func) is middleware (this only serves for a request in a certain route.). App.use(func) works for every type of request.
// We can use middleware to log detais of every request, authentication check middleware for protected routes, we could also use to parse JSON data from request, return 404 pages... It runs top to bottom. 

const express = require('express');
const morgan = require('morgan'); // It's a 3rd party middleware, it's a logger.

// express app
const app = express();

// listen for requests
app.listen(3000);

// register view engine
app.set('view engine', 'ejs');

// middleware & static files - this files are the ones we want to make "public to the browser"
app.use(express.static('public')); // Inside this folder, is a styles.css file. We're also linking this file on ./partials/head.ejs  

app.use((req, res, next) => { // Remember this app.use is not specific to any route, so it's important to consider the position of this block of code.
  console.log('new request made:');
  console.log('host: ', req.hostname);
  console.log('path: ', req.path);
  console.log('method: ', req.method);
  next(); // If we don't use this, the the middleware will stop here, this tells the compiler to go to the next function below.
});

app.use((req, res, next) => {
  console.log('in the next middleware');
  next();
});

app.use(morgan('dev')); // This piece of middleware is logging the status code and how much time it takes to each request.

app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

app.get('/', (req, res) => {
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
