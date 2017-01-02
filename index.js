var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/demo', function(req, res) {
  res.render('demo');
});

app.post('/', function(req, res) {
  console.log(req.uploadFile);
});

app.listen(3000, function() {
  console.log('file_demo starts!');
});
