//let fs = require('fs');
//const Sequelize = require('sequelize');
/*let http = require ('http');
http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end("Déja ça c'est bien !")
}).listen(8080);*/
let app = require('express')();
let User = require('./models/user');
const port = 8080;

app.use(new User);
app.listen(port, ()=>{
  console.log("Server Run on :" + port);
});
