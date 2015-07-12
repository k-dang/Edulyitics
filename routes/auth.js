var express = require('express');
var router = express.Router();
var models =  require('../models');
var passport = require('passport');


router.get ('/register', function(req, res, next) {
  res.render ('signup')
});

router.get ('/login', function(req, res, next) {
  res.render ('login')
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

router.post('/login', loginPost);

function loginPost(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }

    if (!user) {
      req.session.messages = info.message;
      return res.redirect('/login');
    }

    req.logIn(user, function(err) {
      if (err) {
        req.session.messages = "Error";
        return next(err);
      }

      req.session.messages = "Login successfully";
      return res.redirect('/');
    });

  })(req, res, next);
}
module.exports = router;

