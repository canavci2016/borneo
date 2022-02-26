const expressLoader = require('./src/Loaders/Express');
const database = require('./src/Loaders/DataBase');
const logger = require('./src/Loaders/Logger');


function Borneo() {
  this.expressApp = new expressLoader();
}

Borneo.express = expressLoader;
Borneo.database = database;
Borneo.logger = logger;

module.exports = Borneo;