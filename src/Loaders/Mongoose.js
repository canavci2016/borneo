const mongoose = require('mongoose');

module.exports.connection = ({host, ...opt}) => {
  let {driver, connector, ...options} = opt;
  let db = mongoose.createConnection(host, options);

  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log(host + "Connected successfully");
  });

  return db;
};


module.exports.mongoose = mongoose;