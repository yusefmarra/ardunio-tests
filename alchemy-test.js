var five = require("johnny-five");
var app = require('express')();
var alchemy = require('alchemy-api');
var board = new five.Board();
var twilio = require('twilio')(accountSid, authToken);


app.set('port', 3000);

var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});

app.post('/sms', function(req, res) {

});

board.on("ready", function() {
    var green = new five.Led(12);
    var red = new five.Led(13);


}
