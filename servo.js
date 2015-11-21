var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
    var servo = new five.Servo(10);

    var button = new five.Button(4);

    var angle = 0;

    button.on('down', function() {
        servo.to(angle);
        angle += 10;
    });

    button.on('hold', function() {
        servo.to(0);
        angle = 0;
    });

    // servo.sweep();
});
