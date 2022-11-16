const net = require("net");

// config object for connect
config = {
  host: 'localhost',
    port: 50541
}


//establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection(config);

// interpret incoming data as text
  conn.setEncoding("utf8");


  //event to handle data from server
  conn.on('data', (x) => {
    console.log('Server says: ', x)
  })

  

  // connection.on('data', (messageFromTheServer) => {
  //   console.log('Server says:', messageFromTheServer); 
  // });

  

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = {
  connect,
}