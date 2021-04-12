const mongoose = require('mongoose')
const Schema = mongoose.Schema
// mongoose.plugin(slug);

const Categoria = new Schema({
  nome: {
  type: String,
   required: true
  },
  slug: {
  type: String,
  required: true
  },
  date: {
    type: Date,
    Default: Date.now()
  }
})

mongoose.model('Categorias', Categoria)

