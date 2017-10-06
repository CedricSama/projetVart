const db = require('./configDB');
const Sequelize = require('Sequelize');
const Op = Sequelize.Op;
const connection = new Sequelize(db.configDB.database, db.configDB.user, db.configDB.password,
  {
    operatorsAliases: { $and: Op.and },
    host: db.configDB.host,
    dialect: db.configDB.dialect,
    pool: db.configDB.pool,
  });

module.exports = connection;
