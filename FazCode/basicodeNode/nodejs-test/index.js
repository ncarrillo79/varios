// installed on node_modules folder
const express = require('express');

const router = express.Router()
const morgan =require('morgan')
// initializing the app
const app = express();


//settings sirve para definir variables
//establecer las configuraciones de por 
//ejemplo un motor de plantillas

app.set('appName', 'My primer server')
app.set('views' , __dirname +  '/views');
console.log(__dirname)
app.set('view engine', 'ejs')




// middleware
app.use(morgan('dev'))



// the main route of our app
//images







// bootstraping the app
app.listen(3000, function ()  {
  console.log('Express app started on port 3000');
  console.log('Nombre de la app:' , app.get('appName'))
});