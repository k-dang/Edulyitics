"use strict";

module.exports = function(sequelize, DataTypes) {
	var Course = sequelize.define("Course", {
		name : {
			type : DataTypes.STRING,
			allowNull : false,
		},
		course_code : {
			type : DataTypes.STRING,
			allowNull : false,
		},
		faculty : {
			type : DataTypes.STRING,
			allowNull : false,
		},
		program_name : {
			type : DataTypes.STRING,
			allowNull : false,
		},
	},
	{
		timestamps : false,
		tableName : "course",
		underscored: true,
	});
	return Course;
};