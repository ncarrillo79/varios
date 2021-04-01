//https://www.youtube.com/playlist?list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B

const mongoose =require('mongoose')
const Schema =mongoose.Schema

//configurando mongoose
mongoose.connect('mongodb://localhost/inicio', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true }).then(() =>{
    console.log('sucesso na conexão...!')
    }).catch((err) =>{
    console.log('error de conexão' + err)
}) 


//Model - Usuarios (definindo o modelo)
//creamos un esquema y un modelo desde mongoose

const UsuarioSquema= mongoose.Schema({
    nome:{
        type: String,
        unique:true,
        require: true
    },

    sobrenome: {
        type: String,
        require:true
    },
        
    idade:{
        type: Number,
        require: true
    },

    email: {
        type:String,
        require:true
       
    },

    pais:{
        type: String
    }


        
})
//collection
mongoose.model('usuarios', UsuarioSquema)



//midleware
// UsuarioSchema.pre('save', function(next){
//     notify(this.get('email'))
//     next()
// })

const novoUsuario = mongoose.model('usuarios')

new novoUsuario({
    nome:"Gladys",
    sobrenome:"",
    email:"glamer@gmail.com",
    idade:50,
    pais:"Venezuela"

}).save().then(()=>{
    console.log('cadastrado  com sucesso')
}).catch((err)=>{
    console.log('error cadastrando usuario' + err)
})









//*************************** */
//Model - Usuarios

//Definindo o model


// const UsuarioSchema = mongoose.Schema({
//     nome: {
//         Type: String,
//         require:true
//     },

//     sobrenome: {
//         type:string,
//         require:true
//     },

//     email: {
//         type:string,
//         require:true
//     },

//     idade: {
//         type:Number,
//         require:true
//     },

//     pais: {
//         type:String
//     }
// })


// const UsuarioSchema = mongoose.Schema({
//     nome: {
//         Type: String,
//         require:true
//     },

//     sobrenome: {
//         type:string,
//         require:true
//     },

//     email: {
//         type:string,
//         require:true
//     },

//     idade: {
//         type:Number,
//         require:true
//     },

//     pais: {
//         type:String
//     }
// })


// //colection
// mongoose.model('usuarios', UsuarioSchema)

// const novoUsuario = mongoose.model('usuarios')

// new novoUsuario=({
//     nome="Norma",
//     sobrenome="Carrillo",
//     email="mail@gmail.com",
//     idade="50",
//     pais="Brasil"
// }).save().then(()=>{
//     console.log('cadastrado  com sucesso')
// }).catch((err)=>{
//     console.log('error cadastrando usuario' + err)
// })




// //Model - Usuarios

// //Definindo o model

// const UsuarioSchema = mongoose.Schema({
//     nome: {
//         Type: String,
//         require:true
//     },

//     sobrenome: {
//         type:string,
//         require:true
//     },

//     email: {
//         type:string,
//         require:true
//     },

//     idade: {
//         type:Number,
//         require:true
//     },

//     pais: {
//         type:String
//     }
// })


// //colection
// mongoose.model('usuarios', UsuarioSchema)

// const novoUsuario = mongoose.model('usuarios')

// new novoUsuario=({
//     nome="Norma",
//     sobrenome="Carrillo",
//     email="mail@gmail.com",
//     idade="50",
//     pais="Brasil"
// }).save().then(()=>{
//     console.log('cadastrado  com sucesso')
// }).catch((err)=>{
//     console.log('error cadastrando usuario' + err)
// })