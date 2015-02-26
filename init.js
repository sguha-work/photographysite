// this is the entry point of whole application


/**
* Including all external files needed
*/
var router   = require("./router");
var database = require("./db");
var constant = require("./constant");
var server   = require("./server");

var express              = require('express');
var application_main     = express();
var application_resource = express();
var application_codebase = express();
var application_images   = express();

var frontendInit = require("./Frontend/init");

var optionsForSendFile = {
    root: __dirname + '/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };
application_main.get('/', function (req, res) {
  var responseObject = frontendInit.processRequest('/');

  if(responseObject.isFile) {
  	res.sendFile(responseObject.filePath,optionsForSendFile);	
  } else {
  	res.send(responseObject.reponseContent);
  }
});

application_resource.get('/', function (req, res) {
  res.send('resource server');
});
application_codebase.get('/', function (req, res) {
  res.send('codebase server');
});
application_images.get('/', function (req, res) {
  res.send('Image server');
});


/**
* Upping the servers
*/
var server_application = application_main.listen(server.ApplicationPortNumber, function () {
   console.log('Application server listening at %s',  server.ApplicationPortNumber)
});

var server_resource = application_resource.listen(server.ResourcePortNumber, function () {
   console.log('Resource server listening at %s',  server.ResourcePortNumber)
});

var server_codebase = application_codebase.listen(server.CodeBasePortNumber, function () {
   console.log('Codebase server listening at %s',  server.CodeBasePortNumber)
});

var server_images = application_images.listen(server.ImagesPortNumber, function () {
   console.log('Image server listening at %s',  server.ImagesPortNumber)
});