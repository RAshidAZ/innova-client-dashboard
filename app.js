require('./config/index');
require('./mongoDB_connector');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


app.get('/server/live', (req, res) => {
    res.status(200).send({
        success: true,
        message: "The server is live"
    });
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// error handler
app.use(function (err, req, res, next) {
    // set locals,
    let errMessage = err.message;

    // send the error reponse
    res.status(err.status || 500);
    res.send({
        success: false,
        message: errMessage,
    });
});


module.exports = app;