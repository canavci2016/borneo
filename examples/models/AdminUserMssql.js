const {database: {getConnection, DataTypes, Sequelize}} = require("../../index");

const Model = getConnection("borneoMssqlDb").instance.define('AdminUser', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING},
  middle_name: DataTypes.STRING,
  email_address: {type: DataTypes.STRING, allowNull: false},
}, {
  tableName: "users",
  createdAt: false,
  updatedAt: false,
  setterMethods: {},
  getterMethods: {}
});


module.exports = Model;
