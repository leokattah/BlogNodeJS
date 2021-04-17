if (process.env.NODE_ENV == 'production') {
  module.exports = process.env.MONGOURI
} else {module.exports = { mongoURI: 'mongodb://localhost/blogapp' };
}