var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

app.use(logger('dev'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(favicon(path.join(__dirname, 'public', 'images', 'ns.png')));

var index = require('./routes/index');

app.use('/', index);

var names = [];
app.get('/form', function (req, res) {
  res.render('form', { title: 'Form', names: names.join(',') });
});

app.post('/form', function (req, res) {
  names.push(req.body.name);
  res.redirect('/form');
});

app.post('/names', function (req, res) {
  names.push(req.body); //We receive it as a JavaScript object
  console.log(JSON.stringify(req.body));
  res.redirect('/form');
});

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', { title: 'Error', message: err.message, error: err });
  });
} else {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', { title: 'Error', message: err.message });
  });
}

module.exports = app;
