var express = require('express');
var database = require('./database');
var score = 0;
var count = 0;

var app = express();
app.use(express.urlencoded());

app.set("view engine", "pug");

app.get("/", (req, res) => {
    if (count < 5) {
        res.render('home', { quesData: database.data()[count].question, sc : score });
    } else {
        res.render('scorePage', { points: score, total: count });
    }
})

app.post("/checkAnswer", (req, res) => {
    var answer = parseInt(req.body.answer);
    var realAns = parseInt(String(database.data()[count].ans));
    count++;
    if (answer == realAns) {
        score++;
    }
    res.redirect("/");
})

app.listen(3000, () => {
    console.log('Node server is running');
})