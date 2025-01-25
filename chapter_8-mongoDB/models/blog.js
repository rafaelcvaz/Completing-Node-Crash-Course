const mongoose = require('mongoose');
const Schema = mongoose.Schema; // It's the thing a model wraps around, it's the way we'll define the structure of the database.

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  snippet: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true
  },
}, { timestamps: true });

// When we run, it auto assigns values for us based on the dabatase created online.

const Blog = mongoose.model('Blog', blogSchema); // Creates a model around the schame and lets us communicate with the database.
module.exports = Blog; // In mongoDB atlas, there's the Blog collection (a part of the database).