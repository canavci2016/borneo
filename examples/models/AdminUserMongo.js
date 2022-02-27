const {database} = require("../../index");

const Model = database.getConnection("borneoMongoDb").instance.define('AdminUser', {
  id: {type: database.DataTypes.INTEGER, field: 'id', primaryKey: true},
  name: {type: database.DataTypes.STRING},
  middle_name: database.DataTypes.STRING,
  email_address: {type: database.DataTypes.STRING, allowNull: false},
}, {
  tableName: "users",
  createdAt: false,
  updatedAt: false,
  setterMethods: {},
  getterMethods: {}
});


module.exports = Model;
