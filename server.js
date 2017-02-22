var express = require('express');
var app = express();


app.use(express.static(__dirname + '/public'));
var server = app.listen('3000', function(req, res) {
    var port = server.address().port;
    console.log('Express server now listening on', port);
})