
//cargar módulos
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const admin = require('./routes/admin')
const path = require('path')
const mongoose= require('mongoose')

//configuracões
app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())

//handlebars
app.engine('handlebars', handlebars({defaultLayout:'main'}))
app.set('view engine', 'handlebars')


//Mongoose, conect base de dados
mongoose.Promise == global.promise
mongoose.connect('mongodb://localhost/blogapp').then(() => {
    console.log("Conect to mongo")
}).catch((err) => {
    console.log('error ao conectar:' + err)
})
    

// public aquí tem os arquivos estaticos css javascript

app.use(express.static(path.join(__dirname, 'public')))
app.use((req, res, next) => {
    console.log('SOU UM MIDDLEWARE') 
    next()
 })

//Rotas

app.get('/', (req, res) => {
    res.send('rota principal')

})

app.get('/posts', (req, res) => {
    res.send('"lista Post')
})

app.use('/admin',admin)


//outros

// app.use('/', (req,res) => {
//     res.status(200).send('Tudo bem por aqui!!')
// })

const PORT = 8081
app.listen(PORT,() => {
   
    console.log("Servidor rodando")

})
