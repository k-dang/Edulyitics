var express = require('express');
var router = express.Router();
var models =  require('../models');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

router.get ('/register', function(req, res, next) {
  res.render ('signup');
});

router.get ('/login', function(req, res, next) {
  res.render ('login');
});

router.post('/register', function(req, res, next) {
  var first_name = req.param('first_name');
  var last_name = req.param('last_name');
  var email_address = req.param('email');
  var password = req.param('password');

  models.User
    .findOrCreate({ where : { first_name: first_name, last_name: last_name, email_address: email_address, password: password }, defaults: {}})
    .spread(function(user, created) {
      res.send("created");
    });
});

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done){
  models.User.findOne(id)
    .then(function(user){
        done(null, user);
    }).error(function(err){
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
        done(null, false, { message: 'Unknown user' });
      } else if (password != user.password) {
        done(null, false, { message: 'Invalid password'});
      } else {
        done(null, user);
      }
    }).error(function(err){
      done(err);
    });
  }
));

router.post('/login', passport.authenticate('local', {
  failureRedirect: '/auth/register',
  successRedirect: '/course/'
}));

router.get('/logout', logout);

function logout(req, res){
  if(req.isAuthenticated()){
    req.logout();
  }
    res.redirect('/');
}
module.exports = router;

