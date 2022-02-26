const borneo = require("../index");
const borneoServer = new borneo();
const port = process.env.PORT || 3000;

borneo.database.addConnection("borneoMysqlDb", {
  host: "127.0.0.1",
  database: "borneo",
  user: "root",
  password: "23101993",
  driver: "mysql",
  port: "3307"
});

borneo.database.addConnection("borneoMssqlDb", {
  host: "127.0.0.1",
  database: "borneo",
  user: "sa",
  password: "23101993Can.",
  dialectOptions: {"options": {validateBulkLoadParameters: true}},
  driver: "mssql",
});

borneo.logger.add("general", {filePath: "storage/logs"});

const logger = borneo.logger.get("general");

logger.error("merhaba");
logger.warn("merhaba");
logger.info("merhaba");
logger.info("merhaba2");

const AdminUserMysql = require("./models/AdminUserMysql");
const AdminUserMssql = require("./models/AdminUserMssql");

AdminUserMysql.count().then(r => console.log("mysql user count is " + r));
AdminUserMssql.count().then(r => console.log("mssql user count is " + r));

borneoServer.expressApp.get("/", (req, res) => res.json({c: 1}));
borneoServer.expressApp.listen(port, console.log(`listening port is  ${port}`));