var express = require('express');
var router = express.Router();
//var User =
var models = require("../models"); //place on top of the file</pre>
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

/* GET home page. */
router.get('/', function(req, res, next) {
  models.User.findAll().then(function(users) {
      res.render('index', {
        users: users
      });
    });
});

module.exports = router;
