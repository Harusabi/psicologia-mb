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

app.listen(port, '10.2.126.185', () => {
  console.log(`Example app listening in http://0.0.0.0:${port}`);
  open(`http://10.2.126.185:${port}`);
});
