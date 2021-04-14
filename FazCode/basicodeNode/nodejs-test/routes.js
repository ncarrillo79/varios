app.get('/', (req, res) => {
    res.render('index.ejs')
  });
  
  app.get('/login', (req, res) => {
      res.render('login')
    });
  
  
  
  app.get('*', (req, res) => {
      res.end('archivo no encontrado')
  })