const express = require('express');
const open = require('open').default;
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views', 'pages'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/contacto', (req, res) => {
  res.render('contact');
});

app.listen(port, '192.168.1.26', () => {
  console.log(`Example app listening in http://192.168.1.26:${port}`);
  open(`http://192.168.1.26:${port}`);
});
