var express = require('express');
var router = express.Router();
var models =  require('../models');
var passport = require('passport');

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


//TODO: Need to move this to some sort of middleware, eg use one found in auth.js in middleware folder
// function isAuthenticated(req, res, next) {

//     // do any checks you want to in here

//     // CHECK THE USER STORED IN SESSION FOR A CUSTOM VARIABLE
//     // you can do this however you want with whatever variables you set up
//     if (req.isAuthenticated())
//         return next();

//     // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM SOMEWHERE
//     res.redirect('/');
// }

//TODO: To be removed when completed
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

