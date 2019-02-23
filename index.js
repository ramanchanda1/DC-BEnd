var express = require('express')
var app = express()
var cors = require('cors');
var PORT = 5000

app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
 }));
  

app.get('/food/:name/:comment', function(req, res) {
    var data = {
        foodName:  req.param.name,
        comment: req.params.comment
    }
    res.json(data)
})

app.listen(PORT)

