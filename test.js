var five = require("johnny-five");
var app = require('express')();
var board = new five.Board();

// app.listen(8000);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});

var io = require('socket.io')(server);

board.on("ready", function() {
    // Create an Led on pin 13
    var green = new five.Led(12);
    var red = new five.Led(13);
    // var servo = new five.Servo(10);

    var button = new five.Button(4);

    board.repl.inject({
      button: button,
    //   servo: servo
    });

    // console.log(servo.read());

    io.on('connection', function(socket) {
        socket.on('red', function() {
            red.toggle();
        });
    });

    button.on("down", function() {
      green.toggle();
      io.emit('led');
    //   servo.to(0);
    //   console.log('down');
    });

    // button.on("hold", function() {
    //   red.pulse({
    //       easing: "linear",
    //       duration: 3000,
    //       cuePoints: [0, 0.2, 0.4, 0.6, 0.8, 1],
    //       keyFrames: [0, 10, 0, 50, 0, 255],
    //     });
    // });

    button.on("up", function() {
      red.off();
    });

    // servo.sweep();
});
