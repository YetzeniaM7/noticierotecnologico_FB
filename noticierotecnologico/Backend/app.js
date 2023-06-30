var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const morgan = require("morgan");



var homeRouter = require('./routes/home');
var ciberseguridadRouter = require('./routes/ciberseguridad');
var roboticaRouter = require('./routes/robotica');
var metaversoRouter = require('./routes/metaverso');
var loginRouter = require('./routes/login');
var signupRouter = require('./routes/signup');
var app = express();

//Initializations 
//var db = require('./database');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use('/home', homeRouter);
app.use('/ciberseguridad',ciberseguridadRouter);
app.use('/robotica', roboticaRouter);
app.use('/metaverso', metaversoRouter);
app.use('/login',loginRouter);
app.use('/signup', signupRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
