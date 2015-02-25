// this is the entry point of whole application


/**
* Including all external files needed
*/
var router   = require("./router");
var database = require("./db");
var constant = require("./constant");
var server   = require("./server");

var express = require('express');
var application_main = express();
var application_resource = express();

application_main.get('/', function (req, res) {
  res.send('application server');
});
application_resource.get('/', function (req, res) {
  res.send('resource server');
});

var server_application = application_main.listen(server.ApplicationPortNumber, function () {
   console.log('Application server listening at %s',  server.ApplicationPortNumber)
});

var server_resource = application_resource.listen(server.ResourcePortNumber, function () {
   console.log('Application server listening at %s',  server.ResourcePortNumber)
});