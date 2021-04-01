//https://www.youtube.com/playlist?list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B

const express=require('express')

const app = express()


// app.use((req, res, next) =>{
//     console.log(req.url)
//     next()
// })

// app.use(function(req, res){
//     res.sendFile(__dirname + '/miHTML.html')
    
//})

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/miHTML.html')
})

app.get('/muestra-imagem', (req, res) =>{
    res.sendFile(__dirname + '/js.png')
})

app.get('/about' ,(req, res) =>{
    res.send('about')
})

app.get('/skills', (req, res) =>{
    res.send('skills')
})
app.listen(3000)


//console.log('server running')




// const http =require('http')

// http.createServer(function(req, res){
//     res.end('<h1>hello world</>')
// }).listen(3000)

// console.log('server running')

