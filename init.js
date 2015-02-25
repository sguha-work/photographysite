// this is the entry point of whole application


/**
* Including all external files needed
*/
var router   = require("./router");
var database = require("./db");
var constant = require("./constant");
var server   = require("./server");

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!')
})

var server1 = app.listen(server.ApplicationPortNumber, function () {

  var host = server1.address().address
  var port = server1.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})