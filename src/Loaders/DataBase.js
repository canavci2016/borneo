const {connection, ...res} = require('./Sequelize');
let connectionPools = {};

let obj = {
  pools: connectionPools,
  addConnection: (key, conObj) => {
    connectionPools[key] = connection(conObj);
  },
  ...res

};


module.exports = obj;
