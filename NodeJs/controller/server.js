let express = require('express');
let {Controller}=require('./controller/RootModelController');
let bodyParser=require('body-parser');
let cors=require('cors');
let UserModel=require('./model/user');
// let UserService=require('./service/UserService');
let MissionModel=require('./model/mission');
let TaskModel=require('./model/task');
let app = express();

const fakeUser={email:'lbarjonnet@gmail.com',password:"123"}

// Parse incoming request bodies in a middleware before your handlers, available under the  req.body  property.
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())
// parse application/json
app.use(bodyParser.json())

app.use(cors());

app.use('/auth/login', (new Controller(UserModel).getRoot()));
app.use('/auth/register', (new Controller(UserModel).getRoot()));
app.use("/mission",(new Controller(MissionModel).getRoot()));
app.use("/user",(new Controller(UserModel).getRoot()));
app.use("/task",(new Controller(TaskModel).getRoot()));
app.use((Request,Response,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Content-Type');
    next();
})
app.get('/', function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    response.write('HomePage');
    response.end();
});
app.listen(8080);
