"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + '/../config/config.json')[env];

// initialize database connection
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db = {};


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

//TODO: Below code needs to be removed
//RELATIONSHIP CODE -- BEGIN

//Load models
// var models = [
// 	'user',
// 	'course',
// 	'course_user',
// 	'assessment'
// ];

// models.forEach(function(model) {
//   module.exports[model] = sequelize.import(__dirname + '/' + model);
// });

// describe relationships
//TODO: This is not making the associations
// (function(m) {
//   m.course_user.belongsTo(m.user);
//   m.course_user.belongsTo(m.course);

//   m.course.hasMany(m.course_user);
  
//   m.user.hasMany(m.course_user);
  
//   // m.User.hasMany(m.Task);
//   // m.User.hasMany(m.PhoneNumber);

//   m.assessment.belongsTo(m.user);
//   m.assessment.belongsTo(m.course);
// })(module.exports);
// console.log("RelationShip Loaded");

//m is set as module.export very similar to how jquery is passed into a forced function.

//RELATIONSHIP CODE -- END


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
