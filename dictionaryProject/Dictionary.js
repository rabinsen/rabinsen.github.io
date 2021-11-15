var express = require("express");
var cors = require('cors');
var word = require('./word');
const path = require("path");

var app = express();
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "/public")));

app.use(cors()) // Use this after the variable declaration

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "dict.html"));
})
app.get("/dict.js", function (req, res) {
    res.sendFile(path.join(__dirname, "/dict.js"));
  });

app.post('/search', function(req, res){
    var wd = req.body.word;
    console.log(wd);
});  

app.listen(3000, function(){
    console.log("Server is running")
});
