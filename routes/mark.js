var express = require('express');
var router = express.Router();
var models =  require('../models');

router.get('/', function(req, res, next) {
  res.send('Mark route');
});


router.get('/all', function(req, res, next) {
  res.send('Mark route load all!');
});


router.get('/add', function(req, res, next) {
  res.send('Mark added');
});

module.exports = router;