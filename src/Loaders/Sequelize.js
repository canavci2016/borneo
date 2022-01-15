const {Sequelize, DataTypes, QueryTypes, Op} = require('sequelize');

const createModel = (seqIns) => {
  return (modelName, tableName, attributes, options = {}) => {
    return seqIns.define(modelName, attributes, {tableName, createdAt: false, updatedAt: false, ...options});
  };
};

module.exports.connection = ({host, database, user, password, driver = "mssql", ...otherSetting}) => {

  const sequelize = new Sequelize(database, user, password, {
    logging: console.log,
    host: host,
    dialect: driver /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
    dialectOptions: {"options": {validateBulkLoadParameters: true}},
    ...otherSetting
  });

  sequelize.authenticate()
    .then(() => console.log(`${host} connection was established`)).catch(console.log);

  return {createModel: createModel(sequelize), instance: sequelize};
};

module.exports.Sequelize = Sequelize;
module.exports.DataTypes = DataTypes;
module.exports.QueryTypes = QueryTypes;
module.exports.Op = Op;