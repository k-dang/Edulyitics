"use strict";

module.exports = function(sequelize, DataTypes) {
	var Course = sequelize.define("Course", {
		name : {
			type : DataTypes.STRING,
			allowNull : false,
		},
		courseCode : {
			type : DataTypes.STRING,
			allowNull : false,
		},
		faculty : {
			type : DataTypes.STRING,
			allowNull : false,
		},
		programName : {
			type : DataTypes.STRING,
			allowNull : false,
		}
	});
	return Course;
};