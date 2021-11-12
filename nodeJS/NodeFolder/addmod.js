//module to perform Addition

exports.add = (req, res, vals) => {
    var sum = parseInt(vals.first) + parseInt(vals.second);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(` <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calculator Website</title>
    </head>
    <body>
        <p>The sum is: ${String(sum)}</p>
    </body>
    </html> `);
    return res.end();
}