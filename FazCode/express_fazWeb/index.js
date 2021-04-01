//=====criando servidor com express

// const express =require('express')

// const app=express()

// app.get('/',(req,res)=>{
//     res.send('hola mundo como están?')
// })

// app.get('/about',(req,res)=>{
//     res.send('about me')
// })

// app.get('/contact',(req,res)=>{
//     res.send('form contact')
// })

// app.get('/test',(req,res)=>{
//     res.send('<h1>TEST<h1>')
// })

// app.listen(4000,()=>{
//     console.log('server on port 4000')
// })

//===criando petiçoes====

const express =require('express')

const app=express()

const morgan=require('morgan')
//====midleware creado con modulo morgan===

//===midle warecriado por mim====
// function logger(req,res,next){
// console.log(`Route Received: ${req.protocol}://${req.get('host')}${req.originalUrl}`)
// next()
// }

app.use(express.json())
app.use(morgan('dev'))

//app.use(logger)

app.all('/user',(req,res,next)=>{
    console.log('por aqui paso')
    next()
})

app.get('/user',(req,res)=>{
       res.json({
           username:'Norma',
           lastname:'carrillo'
       })
     })




app.post('/user/:id',(req,res)=>{
    console.log(req.body)
    console.log(req.params)
    res.send('POST REQUEST RECEIVED')
})

app.put('/user/:id',(req,res)=>{
    console.log(req.body)
    res.send(`User ${req.params.id} updated`)
    
})



app.delete('/user/:userid',(req,res)=>{
res.send(`User ${req.params.userId} deleted`)

})

app.listen(4000,()=>{
    console.log('server on port 4000')
})

app.use(express.static('public'))



// ======criando servidor com modulo http
// const http=require('http')
// const server = http.createServer((req,res)=>{
//     res.status=200
//     res.setHeader('Content-type','text/plain')
//     res.end('hello world')

// })

// server.listen(3000,()=>{console.log('server on port 3000')
// })




