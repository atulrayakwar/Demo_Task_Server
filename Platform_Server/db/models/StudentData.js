/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('StudentData', {

		studentId: {
			type: DataTypes.INTEGER(5),
			allowNull: false,
			autoIncrement: true,
			unique: true,
			primaryKey: true
		},

		studentName: {
			type: DataTypes.CHAR(20),
			allowNull: false
		},

		marks: {
			type: DataTypes.CHAR(100),
			allowNull: true
		},

		createdAt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		createdBy: {
			type: DataTypes.CHAR(50),
			allowNull: true
		},
		updatedBy: {
			type: DataTypes.CHAR(50),
			allowNull: true
		},
	}, {
			tableName: 'StudentData',
			timestamps: false
		});
};