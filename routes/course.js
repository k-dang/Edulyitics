var express = require('express');
var router = express.Router();
var models =  require('../models');

router.get('/course-add-page', function(req, res, next) {
  res.render('course-add-page');
});

router.get('/', function(req, res, next) {
  // res.send('Course route');
  res.render('course');
});


//TODO: Check if there is a use for this query
router.get('/all', function(req, res, next) {
  models.Course.findAll().then(function(user) {
    //TODO: Need to find how to properly output JSON response
    res.send(user);
  });
});

//Get course by course id
router.get('/get/:course_id', function(req, res, next) {
  var course_id = req.params.course_id;
  var user_id = req.user.id;
  
  models.User.find({ where : { id: user_id }, include : [{ model: models.CourseUser, where: { course_id: course_id } }] }).then(function(course) {
    res.send(course);
  });

});

// router.add('/add', function(req, res, next) {
  
// });

module.exports = router;

