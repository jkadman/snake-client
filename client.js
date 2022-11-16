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
  // show that we are connected to the game server
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  })
  // basic identification of my snek on the board
  conn.on('connect', () => {
    conn.write('Name: JK');
  })
  // tell snek to move up on the board
  conn.on('connect', () => {
    conn.write('Move: up');
    setInterval(() => {
      conn.write('Move: up')}, 50)
      setTimeout(() => {
        conn.write('Move: left')}, 2000)
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