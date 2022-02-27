const borneo = require("../index");
const borneoServer = new borneo();
const port = process.env.PORT || 3000;

borneo.database.addConnection("borneoMongoDb", borneo.database.drivers.mongodb.connectionBuilder({
  host: "mongodb+srv://root:23101993@cluster0.itpri.mongodb.net/myFirstDatabase?retryWrites=true&w=majority\n"
}));

const AdminUserMongo = require("./models/AdminUserMongo");
AdminUserMongo.find({}).then(r => console.log("mongo user count is " + r.length));

borneoServer.expressApp.get("/", (req, res) => res.json({c: 1}));
borneoServer.expressApp.listen(port, console.log(`listening port is  ${port}`));