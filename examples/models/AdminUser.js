const {getConnection, database: {DataTypes, Sequelize}} = require("../../index");

const Model = getConnection("borneoMysqlDb").instance.define('AdminUser', {
  id: {type: DataTypes.INTEGER, defaultValue: Sequelize.UUIDV4, field: 'Id', primaryKey: true},
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
