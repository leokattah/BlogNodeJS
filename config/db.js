if (process.env.NODE_ENV == 'production') {
  module.exports = {mongoURI:process.env.mongoURI};
} else {module.exports = { mongoURI: 'mongodb://localhost/blogapp' };
}