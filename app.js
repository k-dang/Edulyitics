var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
//var routes = require('./routes');

//database
var models = require("./models"); //place on top of the file

//using this "var routes" cause we want to use the route folder ./routes
//commented above
//var routes = require('./routes'); //place on top of the file</pre>


var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


//May not need it. Used to create schemas
//models.sequelize.sync().then(function() {
//  var server = app.listen('5432', function() {
//    console.log('Express server listening on port ' + server.address().port);
//  });
//});

//Post.findAll({
//  where: {
//    authorId: 2
//  }
//});


// app.get('/todo', routes.gettodos);
// app.post('/todo', routes.savetodos);

module.exports = app;
