"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + '/../config/config.json')[env];

// initialize database connection
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db = {};
// var passport = require('passport');
// var localStrategy = require('passport-local').Strategy;


fs.readdirSync(__dirname).filter(function(file) {
	return (file.indexOf(".") !== 0) && (file !== "index.js");
}).forEach(function(file) {
	var model = sequelize["import"](path.join(__dirname, file));
	db[model.name] = model;
});

Object.keys(db).forEach(function(modelName) {
	if ("associate" in db[modelName]) {
		db[modelName].associate(db);
	}
});

// passport.use(new localStrategy({
//     // set the field name here
//     first_name: 'firstname',
//     password: 'password'
//   },
//   function(first_name, password, done) {
//     /* get the username and password from the input arguments of the function */

//     // query the user from the database
//     // don't care the way I query from database, you can use
//     // any method to query the user from database
//     User.find( { where: {first_name: first_name}} )
//       .success(function(user){

//         if(!user)
//           // if the user is not exist
//           return done(null, false, {message: "The user is not exist"});
//         else if(!hashing.compare(password, user.password))
//           // if password does not match
//           return done(null, false, {message: "Wrong password"});
//         else
//           // if everything is OK, return null as the error
//           // and the authenticated user
//           return done(null, user);

//       })
//       .error(function(err){
//         // if command executed with error
//         return done(err);
//       });
//   }
// ));

//RELATIONSHIP CODE -- BEGIN

//Load models
var models = [
	'user',
	'course',
	'course_user',
	'assessment'
];

models.forEach(function(model) {
  module.exports[model] = sequelize.import(__dirname + '/' + model);
});

// describe relationships
(function(m) {
  m.course_user.belongsTo(m.user);
  m.course_user.belongsTo(m.course);

  // m.User.hasMany(m.Task);
  // m.User.hasMany(m.PhoneNumber);

  m.assessment.belongsTo(m.user);
  m.assessment.belongsTo(m.course);
})(module.exports);

//m is set as module.export very similar to how jquery is passed into a forced function.

//RELATIONSHIP CODE -- END


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
