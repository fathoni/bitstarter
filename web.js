var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var fs = require('fs');
    //var buf = new Buffer();                                                   
    var fileBuff =  new Buffer(fs.readFileSync('index.html'));
    var finalContent =fileBuff.toString("utf-8");
    response.send(finalContent);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
