const express = require('express');
const open = require('open').default;
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views', 'pages'));

const redirect = (archive) => {
  app.get("/", (req, res) => {
    res.redirect(archive);
  });
}

module.exports = { redirection };

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/contacto', (req, res) => {
  res.render('contact');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening in http://0.0.0.0:${port}`);
  open(`http://0.0.0.0:${port}`);
});
