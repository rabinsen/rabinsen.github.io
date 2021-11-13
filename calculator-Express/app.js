const express = require('express');

const app = express();
app.use(express.urlencoded());

app.get('/', (req, res, next) => {
    console.log("IN the middleware")
    res.send(`
    <form action='/output' method='post'>
        <label>First Number: <input type="text" name="first"><br></label>
        <label>Second Number: <input type = "text" name = "second"><br></label>
        <label>Choose Operation<select name="operation">
            <option value="add">Add</option>
            <option value="subtract">Subtract</option>
            <option value="multiply">Multiply</option>
            <option value="divid">Divide</option>
        </select></label><br>
        <input type="submit">
    </form>
    `);
});

app.use('/output', (req, res, next) => {
    var output;
    const a = parseInt(req.body.first);
    const b = parseInt(req.body.second)
    if (req.body.operation === 'add') {
        output = a + b;
    } else if (req.body.operation === 'subtract') {
        output = a - b;
    } else if (req.body.operation === 'multiply') {
        output = a * b;
    } else {
        output = a / b;
    }
    res.send(`<h1>The result is ${output} </h1>
           <form action='/' method='get'>
                <input type="submit" value = "Abother Calculation">
           </form>
    `);
});

app.listen(3000, () => {
    console.log('Your Server is running on 4000');
});




