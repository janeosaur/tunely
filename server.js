var express = require('express');

var app = express();

app.use(express.static('public'));


app.get('/', function(req, res) {
  res.sendFile('views/index.html', {root: __dirname});
})

app.listen(3000);
