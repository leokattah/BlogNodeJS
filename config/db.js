if (process.env.NODE_ENV == 'production') {
  module.exports = {mongoURI:'mongodb+srv://leokattah:Brasil-01@cluster0.vjs86.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'};
} else {module.exports = { mongoURI: 'mongodb://localhost/blogapp' };
}