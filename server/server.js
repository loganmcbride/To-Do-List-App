var path = require('path');
var express = require('express');
var fs = require('fs');
var indexRoutes = require('./routes/index.js')
// var body-parser = require('body-parser');

var app = express();

app.set('view engine', 'html');
app.engine('html', function(path, options, callbacks){
  fs.readFile(path, 'utf-8', callback)
})
app.use(express.static(path.join(__dirname, '../client')));

app.use('/', indexRoutes);

app.use(function(err, req, res, next) {
  res.status(err.status || 500)
})

app.listen('3000', function(){
  console.log('listening on port 3000!')
})
