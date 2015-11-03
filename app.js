var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');

var routes = require('./routes/index');
var users = require('./routes/users');
var course = require('./routes/course');
var mark = require('./routes/mark');
var auth = require('./routes/auth');

//database
var models = require("./models"); //place on top of the file

var app = express();

// PassportJS
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

//TODO: Need to figure out why this does not loat
passport.deserializeUser(function(id, done){
  console.log('deserializeUser')
  models.User.findById(id)
    .then(function(user){
        console.log('Success')
        done(null, user);
    }).error(function(err){
        console.log('failure')
        done(new Error('User ' + id + ' does not exist'));
    });
});

passport.use(new LocalStrategy({
    usernameField: 'first_name',
    passwordField: 'password'
  },
  function(username, password, done) {
    models.User.findOne({ where: { first_name: username
    }}).then(function(user) {
      if (!user) {
        console.log('no');
        done(null, false, { message: 'Unknown user' });
      } else if (password != user.password) {
        console.log('no');
        done(null, false, { message: 'Invalid password'});
      } else {
        console.log(user);
        console.log('yes');
        done(null, user);
      }
    }).error(function(err){
      done(err);
    });
  }
));

// view engine setup
// app.set('views', path.join(__dirname, '/public/views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public',express.static(path.join(__dirname, 'public')));
app.use('/stylesheets',express.static(path.join(__dirname, 'public/stylesheets')));
app.use('/javascripts',express.static(path.join(__dirname, 'public/javascripts')));
app.use('/coursepages',express.static(path.join(__dirname, 'public/coursepages')));
// app.use(session({ secret: 'anything' }));
app.use(session({
  secret: 'anything',
  saveUninitialized: true,
  resave: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);
app.use('/users', users);
app.use('/course', course);
app.use('/mark', mark);
app.use('/auth', auth);


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
// models.sequelize.sync([{ force: true }]).then(function() {
models.sequelize.sync().then(function() {  
  var server = app.listen('3000', function() {
    console.log('Express server listening on port ' + server.address().port);
  });
});

module.exports = app;
