const {connection, ...res} = require('./Sequelize');
const mongoose = require('./Mongoose');
let connectionPools = {};

let obj = {

  addConnection: (key, conObj) => {
    if (connectionPools[key]) return false;
    connectionPools[key] = conObj.connector(conObj);
  },

  getConnection: (key) => {
    return connectionPools[key];
  },

  drivers: {
    mysql: {
      connectionBuilder: ({host, database, user, password, ...opt}) => ({
        host,
        database,
        user,
        password,
        driver: "mysql",
        port: "3307",
        ...opt,
        connector: connection
      })
    },
    mssql: {
      connectionBuilder: ({host, database, user, password, ...opt}) => ({
        host,
        database,
        user,
        password,
        driver: "mssql",
        ...opt,
        connector: connection
      })
    },
    mongodb: {
      connectionBuilder: ({host, ...opt}) => ({
        host,
        driver: "mongodb",
        ...opt,
        connector: mongoose.connection
      })
    }
  },
  sequelize:{...res}

};


module.exports = obj;
