var express = require('express');
var app = express();

//open up resources to be publicly viewable
app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/dist'));

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('App listening on port ' + port);
});
