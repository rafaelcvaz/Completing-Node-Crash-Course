const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose'); // Module that makes it easier to connect to the MangoDB (Database)
const Blog = require('./models/blog');

// Mangoose has schemas, that defines the structure of a type of data / document. Defines properties and property types. Here, we have the user schema and the blog schema.
// Mangoose also has models, that allows us to communicat with database collections. We will use a blog model.


// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI = "mongodb+srv://netninja:test1234@net-ninja-tuts-del96.mongodb.net/node-tuts"; // Connects to the database, this is sent when you create a database on the MandoDB Atlas and connects to the application.a

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }) // the second argument avoids deprecation warnings. This connect returns a Promise.
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// mongoose & mongo tests
app.get('/add-blog', (req, res) => { // Adds a new blog to the collection.
  const blog = new Blog({ // We create an instance of the blog creating a new variable, but the Blog is defined as model above.
    title: 'new blog',
    snippet: 'about my new blog',
    body: 'more about my new blog'
  })

  blog.save() // This saves this instance to the database. When we use an instance of the model, we get a bunch of methods we can use, one of then is .save
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

// Returns a Javascript object, {"id" = ..., }

app.get('/all-blogs', (req, res) => {
  Blog.find() // This time, it will log a list of documents, a list in form of objects of all blogs in the database.
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/single-blog', (req, res) => {
  Blog.findById('5ea99b49b8531f40c0fde689')
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes
app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

app.get('/blogs', (req, res) => {
  Blog.find().sort({ createdAt: -1 }) // Using the timestamp mangoose automatically created, sorts by most recent.
    .then(result => {
      res.render('index', { blogs: result, title: 'All blogs' });
    })
    .catch(err => {
      console.log(err);
    });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});