// play.js
const  connect  = require('./client');
console.log('Connecting ...');
connect();

/*const handleUserInput = function (data) {
  
}*/

// Set up keyboard input
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (data) => {
    if (data === '\u0003') {
      process.exit();
    } else {
      console.log("Things");
    }
  });



  return stdin;
}

setupInput();