exports.home = function (req, res, count, score) {
    var database = require('./database');

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
    html 
    head 
        title Quiz App 
    body 
        div.container
            h1 The Number Quiz 
            p Your score is ${String(score)}
    `);
    if (count < 5) {
        res.write(`p Guess the next number in the sequence 
        ${String(database.questions()[count].question)}
        form(action="http://localhost:8080/checkAnswer.js")
            label Your answer: 
            input(type="text" name="answer")
            input(type="submit") `);
    }
}