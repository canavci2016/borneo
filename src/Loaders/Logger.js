const logger = require('./Log');
let pools = {};

let obj = {
  add: (key, conObj) => {
    pools[key] = logger(conObj);
  },
  get: (key) => {
    return pools[key];
  },
};

module.exports = obj;
