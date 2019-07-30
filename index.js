var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");
var port = process.env.PORT || 8080;
var env = require('dotenv').config({path: __dirname + '/.env'});


var usersRouter = require('./routes/users');
var eventsRouter = require('./routes/events');
var functionsRouter = require('./routes/functions');

app.use(bodyParser.json());
app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended:false
    })
);

//const mongoURI = "mongodb://localhost:27017/mern";
//const mongoURI = "mongodb://mongo-askit:jSNNtWglhskcsQvLeljGhxkDLU368EUEnyZM63gJViysFq2zVrYQPiaNoQHSLFz5P279Nc6opRYl97AjgpuE3Q==@mongo-askit.documents.azure.com:10255/?ssl=true&replicaSet=globaldb";

mongoose.connect(process.env.COSMOSDB_CONNSTR+"?ssl=true&replicaSet=globaldb", {
  auth: {
    user: process.env.COSMODDB_USER,
    password: process.env.COSMOSDB_PASSWORD
  },
    useNewUrlParser: true
})
.then(() => console.log('Connection to CosmosDB successful'))
.catch((err) => console.error(err));

app.get('/',(req,res)=>res.send("Hello,Welcome to TeamUp API Center"));
app.use('/users', usersRouter);
app.use('/events', eventsRouter);
app.use('/functions', functionsRouter);


app.listen(port,()=>{
   console.log("Server is running on port:" + port);
});



