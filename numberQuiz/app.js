var express = require('express');
var app = express();

app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render('home');
})

app.listen(3000, () => {
    console.log('Node server is running');
})






/* var http = require('http');
var fs = require('fs');
var url = require('url');
var home = require('./home');
var count = 0;
var score = 0; */

/* http.createServer((req, res) => {
    return home.home(req, res, count, score);
}).listen(8080); */