const express = require('express');
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

app.get('/terapias', (req, res) => {
  res.render('therapies');
});

app.get('/conoceme', (req, res) => {
  res.render('toKnow');
});

app.get('/ayuda', (req, res) => {
  res.render('professionalHelp');
});

app.get('/asesoria&estudiantes', (req, res) => {
  res.render('educative');
});

app.get('/psicologia&laboral', (req, res) => {
  res.render('labor');
});

app.use((req, res) => {
  res.status(404).render('404');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening in http://0.0.0.0:${port}`);
});
