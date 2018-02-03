

// const init =require("./react");

const express = require("express");

var app = express();

// console.log(init())
// const path = require("path");
const host = "0.0.0.0";
const db = require("./db/db");
const port = 3000;


var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});



app.get("/local",(req,res)=>{
    db.conn((err,dbs)=>{
      var local=dbs.connect("local");
      local.find({}).toArray((err,list=>{
          res.send(list)
      }) 

    })
})










app.listen("3000", () => {
    console.log(`the server is running at http://localhost:${port}`)
})


