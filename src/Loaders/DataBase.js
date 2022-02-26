const {connection, ...res} = require('./Sequelize');
let connectionPools = {};

let obj = {
  addConnection: (key, conObj) => {
    if (connectionPools[key]) return false;
    connectionPools[key] = connection(conObj);
  },
  getConnection: (key) => {
    return connectionPools[key];
  },
  ...res

};


module.exports = obj;
