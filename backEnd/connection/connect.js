const Sequelize = require('Sequelize');
const Op = Sequelize.Op;
const db = require('./dBConfig');
const connection = new Sequelize(db.DBC.database, db.DBC.user, db.DBC.password,{
  operatorsAliases: { $and: Op.and },
  host: db.DBC.server,
  port: db.DBC.port,
  dialect: db.DBC.dialect,
  pool: db.DBC.pool
});

module.exports = connection;
