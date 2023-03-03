var express = require('express')
 var http = require ('http')
 const mongo = require ('mongoose')
const bodyParser = require("body-parser");
 const Studentrouter= require('./routes/student')
 const mongoconnection = require('./config/DBConnection.json')
 var path = require('path')

var app = express();
app.set("views", path.join(__dirname,"views"))
app.set("view engine", "twig")

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

const io=require("socket.io")(server)
io.on("connection", (socket)=>{
  console.log("User connected")
  socket.emit("msg","A new user is connected")
  socket.on("typing",(data) => {
    socket.broadcast.emit("typing",data)
  })
  socket.on("msg" ,(data)=>{
    console.log("d1" +data)
    add(data)
    io.emit("msg" , data)
  })

})
module.exports=app