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
		classMethods: {
	      associate: function(models) {
	        CourseUser.belongsTo(models.User, {
	          onDelete: "CASCADE",
	          foreignKey: {
	            allowNull: false
	          }
	        });
			CourseUser.belongsTo(models.Course, {
	          onDelete: "CASCADE",
	          foreignKey: {
	            allowNull: false
	          }
	        });
	      }
		}
	});
	
	return CourseUser;
};

