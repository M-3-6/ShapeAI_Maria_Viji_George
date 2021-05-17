const bodyParser = require("body-parser");
const express = require("express");
// const { get } = require("http");
const app = express();

app.use(bodyParser.urlencoded({extended}=true));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    var a = Number(req.body.num1);
    var b = Number(req.body.num2);
    var result = a+b;
    res.send("The answer is : "+result);
});

app.listen(3000,function(){
    console.log("server has started on port 3000");
});