var express = require('express');
var router = express.Router();
var models =  require('../models');
// var passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('User route');
});

// router.get('/user', function(req, res, next) {
//   models.User.find({
//     where: {id: }
//   })
// });

// router.get('/all', function(req, res) {
//   // models.User.findAll({
//   //   include: [ models.Task ]
//   // }).then(function(users) {
//   //   res.render('index', {
//   //     title: 'Express',
//   //     users: users
//   //   });
//   // });
//   //res.send('respond with a resource, hit the correct node');

//   models.User.findById(1).then(function(project) {
//   // project will be an instance of Project and stores the content of the table entry
//   // with id 123. if such an entry is not defined you will get null
//     res.send(project);
//   });
// });

router.get('/all', function(req, res) {
  models.User.findAll().then(function(user) {
    //TODO: Need to find how to properly output JSON response
    res.send(user);
  });
});

// Serialize sessions
// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });

// passport.deserializeUser(function(id, done) {
//   db.User.find({where: {id: id}}).success(function(user){
//     done(null, user);
//   }).error(function(err){
//     done(err, null);
//   });
// });


router.get('/add', function(req, res) {

  var firstName = req.param('first_name');
  var lastName = req.param('last_name');

  models.User
    .findOrCreate({ where : { firstName: firstName, lastName: lastName }, defaults: {}})
    .spread(function(user, created) {
      res.send("created");
    });
});

module.exports = router;
