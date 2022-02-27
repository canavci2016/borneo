const borneo = require("../index");
const borneoServer = new borneo();
const port = process.env.PORT || 3000;

borneo.database.addConnection("borneoMysqlDb", borneo.database.drivers.mysql.connectionBuilder({
  host: "127.0.0.1",
  database: "borneo",
  user: "root",
  password: "23101993",
}));

const AdminUserMysql = require("./models/AdminUserMysql");

//AdminUserModel.findAll().then(r => console.log(r));
AdminUserMysql.count().then(r => console.log(r));

borneoServer.expressApp.get("/", (req, res) => res.json({c: 1}));
borneoServer.expressApp.listen(port, console.log(`listening port is  ${port}`));