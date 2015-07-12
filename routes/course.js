var express = require('express');
var router = express.Router();
var models =  require('../models');

router.get('/', function(req, res, next) {
  // res.send('Course route');
  res.render('course');
});

router.post
router.get('/all', function(req, res, next) {
  models.Course.findAll().then(function(user) {
    //TODO: Need to find how to properly output JSON response
    res.send(user);
  });
});

module.exports = router;
