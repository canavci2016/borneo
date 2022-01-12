const expressLoader = require('./src/Loaders/Express');
const database = require('./src/Loaders/DataBase');


class Borneo {
  constructor() {
    this.app = new expressLoader();
    this.database = database;
  }

  setConnection(key, conObj) {
    this.database.addConnection(key, conObj);
  }

  getConnection(key) {
    return this.database.pools[key];
  }

}


module.exports = () => {
  let borneoIns = new Borneo();
  return borneoIns;
};