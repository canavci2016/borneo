const {database} = require("../../index");

const Model = database.getConnection("borneoMysqlDb").instance.define('AdminUser', {
  id: {type: database.sequelize.DataTypes.INTEGER, field: 'id', primaryKey: true},
  name: {type: database.sequelize.DataTypes.STRING},
  middle_name: database.sequelize.DataTypes.STRING,
  email_address: {type: database.sequelize.DataTypes.STRING, allowNull: false},
}, {
  tableName: "users",
  createdAt: false,
  updatedAt: false,
  setterMethods: {},
  getterMethods: {}
});


module.exports = Model;
