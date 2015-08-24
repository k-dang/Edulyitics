var express = require('express');
var router = express.Router();
var models =  require('../models');
var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;

router.get ('/register', function(req, res, next) {
  res.render ('signup');
});

router.get ('/login', function(req, res, next) {
  if(req.isAuthenticated()){
    res.send ('Logged in');
  } else {
    res.render ('login');
  }
});

router.get('/test', function(req, res, next) {
  console.log("Authentication", req.isAuthenticated());
  res.render(req.user);
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

router.post('/login', passport.authenticate('local', {
  failureRedirect: '/auth/register',
  successRedirect: '/course'
}));


//TODO: This does not work, figure out why
//TODO: This is probably not supposed to work, to be removed
// router.get('/test2', passport.authorize('local', { failureRedirect: '/failure' }),
//   function(req, res) {
//     var user = req.user;
//     // var account = req.account;

//     console.log(user);
//     res.render("asda");

//     // Associate the Twitter account with the logged-in user.
//     // account.userId = user.id;
//     // account.save(function(err) {
//     //   if (err) { return self.error(err); }
//     //   self.redirect('/');
//     // });
//   }
// );

router.get('/test3', function(req, res){
  console.log(req.user);
  res.send(req.user.toJSON());
})

router.get('/failure', function(req, res) {
  res.render('failure');
});

router.get('/logout', logout);

function logout(req, res){
  if(req.isAuthenticated()){
    req.logout();
  }
    res.redirect('/');
}
module.exports = router;

