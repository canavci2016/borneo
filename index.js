const expressLoader = require('./src/Loaders/Express');
const database = require('./src/Loaders/DataBase');


function Borneo() {
  this.expressApp = new expressLoader();
}

Borneo.addConnection = database.addConnection;
Borneo.getConnection = database.getConnection;
Borneo.database = database;

module.exports = Borneo;