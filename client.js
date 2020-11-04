const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541,
    /*onread: {
      // Reuses a 4KiB Buffer for every read from the socket.
      buffer: Buffer.alloc(4 * 1024),
      callback: function(nread, buf) {
        // Received data is available in `buf` from 0 to `nread`.
        console.log(buf.toString('utf8', 0, nread));
      }
    }*/
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on("data", (data) => {
    console.log(data);
  })

  return conn;
}


module.exports = connect;