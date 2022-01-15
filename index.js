const expressLoader = require('./src/Loaders/Express');
const database = require('./src/Loaders/DataBase');


function Borneo() {
  this.expressApp = new expressLoader();
  this.database = database;
}

Borneo.prototype.setConnection = function (key, conObj) {
  this.database.addConnection(key, conObj);
};

Borneo.prototype.getConnection = function (key) {
  return this.database.pools[key];
};

Borneo.can = "232323";

module.exports = Borneo;