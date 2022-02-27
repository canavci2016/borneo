const {database} = require("../../index");

const userSchema = new database.mongoose.Schema({ name: 'string', size: 'string' });

const Model = database.getConnection("borneoMongoDb").model('User', userSchema);


module.exports = Model;
