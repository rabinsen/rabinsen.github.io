var express = require("express");

var word = require('./word');
const path = require("path");
var mysql = require('mysql');

var app = express();
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname)));

/* app.use(cors()) // Use this after the variable declaration */

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "dict.html"));
})
 /* app.get("/dict.js", function (req, res) {
     res.sendFile(path.join(__dirname, "/dict.js"));
 }); */

app.post('/search', function (req, res) {
    var con = mysql.createConnection({
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: 'rootPass',
        database: 'entries', 
        /*multipleStatements: true */
    });
    var w = req.body.word;
    word.searchWord(con, w, function(err, result){
        res.send(result);
    });
});

app.listen(3000, function () {
    console.log("Server is running")
});
