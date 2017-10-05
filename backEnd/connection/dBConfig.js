const db = {
  DBC:{
    server: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'dataTaxi',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  }
};

module.exports = db;
