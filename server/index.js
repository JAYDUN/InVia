var app = require('express')();
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

mongoose.connect('mongodb://localhost/Invia');



http.listen(3000, function(){
    console.log('listening on *:3000');
});