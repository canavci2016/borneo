const mongoose = require('mongoose');

module.exports.connection = ({host, ...opt}) => {
  let {driver, connector, ...options} = opt;
  return mongoose.createConnection(host, options);
};


module.exports.mongoose = mongoose;