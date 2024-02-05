const express = require("express");
const path = require('path');
const app = express();
let publicPath = path.join(__dirname,'views')
app.set("view engine", "ejs");

app.use(express.static('pages', { type: 'text/css' }));
app.use(express.static('views'));


app.get('/', (req, res) => {
  res.render('pages/index');
});

app.get('/certification', (req, res) => {
   res.render('pages/certification');
 });

 app.get('/contact', (req, res) => {
  res.render('pages/contact');
});

app.get('/e-marketing', (req, res) => {
  res.render('pages/e-marketing');
});

app.get('/login', (req, res) => {
  res.render('pages/login'); // Ensure this path matches the directory structure
});


app.get('/signup', (req, res) => {
  res.render('pages/signup');
});

app.get('/webdesign', (req, res) => {
  res.render('pages/webdesign');
});

app.get('/webhosting', (req, res) => {
  res.render('pages/webhosting');
});





app.listen(3000);
