if (process.env.NODE_ENV == 'production') {
  module.exports = process.env.mongoURI
} else {module.exports = { mongoURI: 'mongodb://localhost/blogapp' };
}