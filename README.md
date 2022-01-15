# borneo
borneo is a compound framework. gather all the common libraries together. create an base infrastructure for a large number of  http projects 

## Detailed example
```

const borneo = require("../index");
const borneoServer = new borneo();
const port = process.env.PORT || 3000;

borneo.addConnection("borneoMysqlDb", {
  host: "127.0.0.1",
  database: "borneo",
  user: "root",
  password: "23101993",
  driver: "mysql",
  port: "3307"
});

borneo.addConnection("borneoMssqlDb", {
  host: "127.0.0.1",
  database: "borneo",
  user: "sa",
  password: "23101993Can.",
  dialectOptions: {"options": {validateBulkLoadParameters: true}},
  driver: "mssql",
});

const AdminUserMysql = require("./models/AdminUserMysql");
const AdminUserMssql = require("./models/AdminUserMssql");
AdminUserMssql.create({
  name: "can",
  middle_name: "avci",
  email_address: "canavci_2222@gmail.com"
}).then(console.log).catch(console.log);

AdminUserMysql.create({
  name: "can",
  middle_name: "avci",
  email_address: "canavci_2222@gmail.com"
}).then(console.log).catch(console.log);


//AdminUserModel.findAll().then(r => console.log(r));
AdminUserMysql.count().then(r => console.log(r));
AdminUserMssql.count().then(r => console.log(r));

borneoServer.expressApp.get("/", (req, res) => res.json({c: 1}));

borneoServer.expressApp.listen(port, console.log(`listening port is  ${port}`));

```

[ More examples ](examples/)
