var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

var server = app.listen('3000', function(req, res) {
    var port = server.address().port;
    console.log('Express server now listening on', port);
})