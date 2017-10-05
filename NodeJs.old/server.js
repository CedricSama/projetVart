let Sequelize = require('sequelize');
let Op = Sequelize.Op;

let connection = new Sequelize ('dataTaxi', 'root', 'root', {
  operatorsAliases: true,
  host: 'database-host',
  port: 3306,
  dialect: 'mysql'
});

let Article = connection.define('article', {
  title: Sequelize.STRING,
  body: Sequelize.NUMBER
});
