"use strict";

module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		firstName : {
			type : DataTypes.STRING,
			allowNull : false,
		},
		lastName : {
			type : DataTypes.STRING,
			allowNull : false,
		}
	});
	return User;
};