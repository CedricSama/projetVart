//let fs = require('fs');
//const Sequelize = require('sequelize');
/*let http = require ('http');
http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end("Déja ça c'est bien !")
}).listen(8080);*/
let app = require('express')();
let User = require('./models/user');
let {Controller}=require('./controller/abstractController');
const port = 8080;

// new User;
app.use('/user',(new Controller(User)).getRoot());
app.listen(port, ()=>{
  console.log("Server Run on :" + port);
});
