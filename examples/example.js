const borneo = require("../index");
const borneoServer = new borneo();
const port = process.env.PORT || 3000;

borneo.database.addConnection("borneoMysqlDb", borneo.database.drivers.mysql.connectionBuilder({
  host: "127.0.0.1",
  database: "borneo",
  user: "root",
  password: "23101993",
}));

borneo.database.addConnection("borneoMssqlDb", borneo.database.drivers.mssql.connectionBuilder({
  host: "127.0.0.1",
  database: "borneo",
  user: "sa",
  password: "23101993Can.",
  dialectOptions: {"options": {validateBulkLoadParameters: true}},
}));

borneo.database.addConnection("borneoMongoDb", borneo.database.drivers.mongodb.connectionBuilder({
  host: "mongodb+srv://root:23101993@cluster0.itpri.mongodb.net/myFirstDatabase?retryWrites=true&w=majority\n",
  onConnect: () => console.log("connected to mongo"),
  onError: (err) => console.log("mongo error", err)
}));

borneo.logger.add("general", {filePath: "storage/logs"});

const logger = borneo.logger.get("general");

logger.error("merhaba");
logger.warn("merhaba");
logger.info("merhaba");
logger.info("merhaba2");

const AdminUserMysql = require("./models/AdminUserMysql");
const AdminUserMssql = require("./models/AdminUserMssql");
const AdminUserMongo = require("./models/AdminUserMongo");

AdminUserMysql.count().then(r => console.log("mysql user count is " + r)).catch(logger.error);
AdminUserMssql.count().then(r => console.log("mssql user count is " + r)).catch(logger.error);
AdminUserMongo.find({}).then(r => console.log("mongo user count is " + r.length)).catch(logger.error);

borneoServer.expressApp.get("/", (req, res) => res.json({c: 1}));
borneoServer.expressApp.listen(port, console.log(`listening port is  ${port}`));