var five = require("johnny-five");
var board = new five.Board();
var button;

board.on("ready", function() {
    // Create an Led on pin 13
    var green = new five.Led(12);
    var red = new five.Led(11);
    //
    // led.pulse({
    //     easing: "linear",
    //     duration: 3000,
    //     cuePoints: [0, 0.2, 0.4, 0.6, 0.8, 1],
    //     keyFrames: [0, 10, 0, 50, 0, 255],
    //   });


    button = new five.Button(4);


    board.repl.inject({
      button: button
    });

    // Button Event API

    // "down" the button is pressed
    button.on("down", function() {
      console.log("down");
      green.toggle();
    });

    button.on("hold", function() {
      console.log("hold");
      red.pulse({
          easing: "linear",
          duration: 3000,
          cuePoints: [0, 0.2, 0.4, 0.6, 0.8, 1],
          keyFrames: [0, 10, 0, 50, 0, 255],
        });
    });

    button.on("up", function() {
      console.log("up");
      red.off();
    });
});
