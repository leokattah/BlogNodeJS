//Carregando módulos
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const admin = require('./routes/admin')
const path = require('path')
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('connect-flash')
require('dotenv').config()

//Configurações
app.use(session({
  secret: "cursodenode",
resave: true,
saveUninitialized: true
}))
app.use(flash())


//Midleware
app.use((req, res, next) =>{
  res.locals.success_msg = req.flash('success_msg')  // Escrevendo assim, estas variáveis se tornam globais e podem ser acessadas de qualquer arquivo do projeto. 
  res.locals.error_msg = req.flash('error_msg') // Escrevendo assim, estas variáveis se tornam globais e podem ser acessadas de qualquer arquivo do projeto. 
  next()
})

//bodyParser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//handlebars
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//Mongoose

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost:27017/blogapp",
  {useNewUrlParser: true, 
    useUnifiedTopology: true
  }).then(() => {
  console.log('Conectado ao Mongodb com sucesso')
}).catch((err) => {
  console.log("Erro ao se conectar ao Mongodb" + err)
})

  //public
  app.use(express.static(path.join(__dirname, "public")))

  // app.use((req, res, next) => {
  //   console.log('Eu sou um midleware')
  //   next()
  // })

//Rotas

app.use('/admin', admin)

//Outros
const PORT = 8081
app.listen(PORT, () => {
  console.log('Servidor rodando')
})