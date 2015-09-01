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
		classMethods: {
			associate: function(models) {
				Course.belongsToMany(models.User, { through: 'course_user', timestamps: false });
			}
		}
	});
	return Course;
};