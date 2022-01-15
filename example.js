const borneo = require("./index");

const borneoServer = new borneo();

borneoServer.createConnection("wpLive", {
  host: "127.0.0.1",
  database: "cadds",
  user: "canavci",
  password: "23101993",
  driver: "mysql"
});


console.log(Object.keys(borneoServer.getConnection('wpLive')));


borneoServer.expressApp.get("/", (req, res) => res.json({c: 1}));

borneoServer.expressApp.listen(8080, console.log("listening port is http://localhost:8080"));