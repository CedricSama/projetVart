const db = require('./configDB');
const Sequelize = require('sequelize');
const connection = new Sequelize(db.configDB.database, db.configDB.user, db.configDB.password,
  {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    // storage: 'path/to/database.mysql'
  });

module.exports = connection;
