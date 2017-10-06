const app = require('express')();
const Sequelize = require('Sequelize');
const port = 8080;
const connection = require('./connection/connect');
const User = require('./models/user');

new User();
app.listen(port, ()=>{
  console.log("Server Run on :" + port);
});
/*
let Article = connection.define('article', {
  title: Sequelize.STRING,
  body: Sequelize.TEXT
});
connection.sync().then(()=>{
  Article.findAll().then((articles) => {
    console.log(articles.length);
  });
});*/

