var express = require('express');
var router = express.Router();
var models =  require('../models');

router.get('/', function(req, res, next) {
  res.send('Mark route');
});


router.get('/all', function(req, res, next) {
  
  models.Assessment.findAll().then(function(user) {
    //TODO: Need to find how to properly output JSON response
    res.send(user);
  });
  
});


router.get('/add', function(req, res, next) {
  res.send('Mark added');
});

// Get marks related to specific course
//TODO: There needs to be a parameter for user_id so the query can be more specific
router.get('/:course_id/get', function(req, res, next) {
  
  // TODO: This is a place holder
  var user_id = 1;
  
  //TODO: Ensure req.params.course is in list of courses supported
  models.Assessment.findAll({
    where: {
      course_id: req.params.course_id,
      user_id: user_id
    }
  }).then(function(assessment) {
    res.send(assessment);
  });
  
  //res.send(req.params.course);
});

router.get('/:course_id/add', function(req, res, next) {
  
  var user_id = 1;
  
  res.send(req.params.course_id);
  
});

router.get('/', function(req, res, next) {
  
});

module.exports = router;