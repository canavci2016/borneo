const mongoose = require('mongoose');

module.exports.connection = ({host, onConnect = null, onError = null, ...opt}) => {
  let {driver, connector, ...options} = opt;

  let error = (err) => console.log(err);
  error = typeof onConnect === 'function' ? onError : error;

  let db = mongoose.createConnection(host, err => {
    if (err) error(err);
  });

  let success = () => console.log(host + "Connected successfully");
  success = typeof onConnect === 'function' ? onConnect : success;

  db.once("open", success);


  return db;
};


module.exports.mongoose = mongoose;