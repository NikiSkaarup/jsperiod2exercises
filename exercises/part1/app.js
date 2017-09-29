var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/calculator/:operation/:n1/:n2", function (req, res, next) {
    var cr = {
        operation: req.params.operation,
        n1: Number(req.params.n1),
        n2: Number(req.params.n2)
    };
    let opr;
    let result;
    switch (cr.operation) {
        case 'add':
            result = cr.n1 + cr.n2;
            opr = '+';
            break;
        case 'multiply':
            result = cr.n1 * cr.n2;
            opr = '*';
            break;
        case 'divide':
            result = cr.n1 / cr.n2;
            opr = '/';
            break;
        case 'minus':
            result = cr.n1 - cr.n2;
            opr = '-';
            break;
        default:
            result = 'invalid operation';
            opr = 'invalid';
            break;
    }
    req.calculation = `The result of: ${cr.n1} ${opr} ${cr.n2} is: ${result}`;
    next();
});

app.get("/api/calculator/*", function (req, res) {
    res.send(req.calculation);
});

app.listen(3000, () => {
    console.log("Server started, listening on: " + 3000);
});
