var serialPort = require("serialport"),
    SerialPort = require("serialport").SerialPort;


var sp = new SerialPort("COM3", {
      baudrate: 115200,
      dataBits: 8,
      parity: 'none',
      stopBits: 1,
      flowControl: false,
      parser: serialPort.parsers.readline("\r\n")
});

function prompt(message, callback) {
    var stdin = process.stdin,
        stdout = process.stdout;

    stdin.resume();
    stdout.write(message);

    stdin.on('data', function (data) {
        callback(data.toString().trim());
    });
}

console.log("Starting up serial host...\n");


sp.on('data', function(input) {
    console.log(input);
},
prompt('', function (input) {
    sp.write(input);
})
);


