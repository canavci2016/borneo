const sequelize = require('./Sequelize');
let connectionPools = {};


module.exports.pools = connectionPools;
module.exports.addConnection = (key, conObj) => {
  connectionPools[key] = sequelize.connection({
    host: conObj.host,
    database: conObj.database,
    user: conObj.user,
    password: conObj.password,
    driver: conObj.driver ? conObj.driver : "mssql"
  });
};


