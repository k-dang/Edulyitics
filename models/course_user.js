"use strict";

module.exports = function(sequelize, DataTypes) {
	var CourseUser = sequelize.define("CourseUser", {
		// name : {
		// 	type : DataTypes.STRING,
		// 	allowNull : false,
		// }
	},
	{
		timestamps : false,
		tableName : "course_user",
		underscored: true,
	});
	
	return CourseUser;
};

