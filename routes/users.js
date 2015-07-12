var express = require('express');
var router = express.Router();
var models =  require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('User route');
});


router.get('/all', function(req, res) {
  models.User.findAll().then(function(user) {
    //TODO: Need to find how to properly output JSON response
    res.send(user);
  });
});

module.exports = router;
