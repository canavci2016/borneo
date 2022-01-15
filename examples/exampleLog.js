const borneo = require("../index");
const borneoServer = new borneo();
const port = process.env.PORT || 3000;

borneo.logger.add("general", {filePath: "storage/logs"});

const logger = borneo.logger.get("general");

logger.error("merhaba");
logger.warn("merhaba");
logger.info("merhaba");

borneoServer.expressApp.get("/", (req, res) => res.json({c: 1}));
borneoServer.expressApp.listen(port, console.log(`listening port is  ${port}`));