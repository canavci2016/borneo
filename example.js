const borneo = require("./index");

console.log(borneo.can);
const borneoServer = borneo();

borneoServer.setConnection("wpLive", {
  host: "127.0.0.1",
  database: "cadds",
  user: "canavci",
  password: "23101993"
});


borneoServer.setConnection("wpLive2", {
  host: "127.1.0.1",
  database: "cadds",
  user: "canavci",
  password: "23101993"
});

borneoServer.expressApp.get("/", (req, res) => res.json({c: 1}));

borneoServer.expressApp.listen(8080, console.log("listening port is http://localhost:8080"));