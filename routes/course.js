var express = require('express');
var router = express.Router();
var models =  require('../models');
var isAuthenticated = require('../middleware/auth');

router.get('/course-add-page', function(req, res, next) {
  res.render('course-add-page');
});

//TODO: Might not be needed
//Renders course page
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

//Get all courses user has
router.get('/get', isAuthenticated, function(req, res, next) {
  var user_id = req.user.id;
  
  // models.User.find({ where : { id: user_id }, include : [{ model: models.CourseUser }] }).then(function(course) {
  //   res.send(course);
  // });
  
  //TODO: Check if this query is done properly
  //TODO: Make it return only list of courses and associated id
  // models.CourseUser.findAll({ where : { user_id: user_id }, include : [{ model: models.Course }] }).then(function(course) {
  //   res.send(course);
  // });
  
  // models.CourseUser.findAll({ where : { user_id: user_id }, include : [{ model: models.Course }] }).then(function(course) {
  //   res.send(course);
  // });
  
  //TODO: The one below and the one below following are equivalent
  // models.User.findAll({ where : { id: user_id }, include : [{ model: models.Course }] }).then(function(course) {
  //   res.send(course.Courses);
  // });
  
  //TODO: This query can be used but comes with attached user. Therefor it is getting redundant data
  models.Course.findAll({ include : [{ model: models.User, where: { id: user_id } }] }).then(function(query) {
    res.send(query);
  });
});

//Get course by course id
//TODO: Is this being used
//It might be that we are trying to get assessments related to the course that the user did
router.get('/get/:course_id', function(req, res, next) {
  var course_id = req.params.course_id;
  var user_id = req.user.id;
  
  models.User.find({ where : { id: user_id }, include : [{ model: models.CourseUser, where: { course_id: course_id } }] }).then(function(course) {
    res.send(course);
  });

});

//TODO: Add a new course
//TODO: End point not complete
router.get('/add', function(req, res, next) {
  res.send("Course added incomplete.")
});

module.exports = router;

