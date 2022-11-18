const net = require("net");
const { IP, PORT } = require("./constants");

// refactor config
config = { host: IP, 
          port: PORT };

//establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection(config);

  // interpret incoming data as text
  conn.setEncoding("utf8");


  //event to handle data from server
  conn.on('data', (x) => {
    console.log('Server says: ', x)
  })
  // show that we are connected to the game server
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  })
  // basic identification of my snek on the board
  conn.on('connect', () => {
    conn.write('Name: JK');
  })
  
  
  // connection.on('data', (messageFromTheServer) => {
  //   console.log('Server says:', messageFromTheServer); 
  // });

  
  return conn;
};


module.exports = {
  connect,
}