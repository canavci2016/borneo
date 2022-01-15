const borneo = require("./index");
const borneoServer = new borneo();
const port = process.env.PORT || 3000;

borneoServer.createConnection("wpLive", {
  host: "db",
  database: "borneo",
  user: "root",
  password: "23101993",
  driver: "mysql"
});


console.log(Object.keys(borneoServer.getConnection('wpLive')));


borneoServer.expressApp.get("/", (req, res) => res.json({c: 1}));

borneoServer.expressApp.listen(port, console.log(`listening port is  ${port}`));