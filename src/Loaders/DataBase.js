const {connection, ...res} = require('./Sequelize');
let connectionPools = {};
console.log(res);

let obj = {
  pools: connectionPools,
  addConnection: (key, conObj) => {
    connectionPools[key] = connection({
      host: conObj.host,
      database: conObj.database,
      user: conObj.user,
      password: conObj.password,
      driver: conObj.driver ? conObj.driver : "mssql"
    });
  },
  ...res

};


module.exports = obj;
