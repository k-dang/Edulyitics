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

//TODO: Need to move this to some sort of middleware, eg use one found in auth.js in middleware folder
function isAuthenticated(req, res, next) {

    // do any checks you want to in here

    // CHECK THE USER STORED IN SESSION FOR A CUSTOM VARIABLE
    // you can do this however you want with whatever variables you set up
    if (req.isAuthenticated())
        return next();

    // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM SOMEWHERE
    res.redirect('/');
}


//Get course by course id
router.get('/get/:course_id', isAuthenticated, function(req, res, next) {
  var course_id = req.params.course_id;
  var user_id = req.user.id;
  
  models.User.find({ where : { id: user_id }, include : [{ model: models.CourseUser, where: { course_id: course_id } }] }).then(function(course) {
    res.send(course);
  });

});

// router.add('/add', function(req, res, next) {
  
// });

module.exports = router;

