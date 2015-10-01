var express = require('express');
var router = express.Router();
var models = require("../models"); //place on top of the file</pre>

/* GET home page. */
router.get('/', function(req, res, next) {
  // models.User.findAll().then(function(users) {
      // res.render('dashboard',function(err, html){
      	res.sendfile('./public/views/dashboard.html');
      // });
        // users: users
    // });
});

module.exports = router;
