var express = require('express')
 var http = require ('http')
 const mongo = require ('mongoose')
const bodyParser = require("body-parser");
 const Studentrouter= require('./routes/student')
 const mongoconnection = require('./config/DBConnection.json')

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/student', Studentrouter)


 mongo.connect(mongoconnection.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DataBase Connected");
  })
  .catch((err) => {
    console.log(err);
  });

  
const server = http.createServer(app);
server.listen('3000',()=> console.log("server run port port 3000"));

module.exports=app