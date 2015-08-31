"use strict";

module.exports = function(sequelize, DataTypes) {
	var Assessment = sequelize.define("Assessment", {
		assessment_type : {
			type:   DataTypes.ENUM,
    		values: ['midterm', 'test', 'exam'] //Put these in a config file
		},
		grade : {
			type : DataTypes.DOUBLE,
			allowNull : false,
		},
		weight : {
			type : DataTypes.DOUBLE,
			allowNull : false
		}
	},
	{
		timestamps : false,
		tableName : "assessment",
		underscored: true,
		classMethods: {
			associate: function(models) {
				Assessment.belongsTo(models.User,  { foreignKey: 'user_id' });
				Assessment.belongsTo(models.Course,  { foreignKey: 'course_id' });
			}
		}
	});
	
	return Assessment;
};