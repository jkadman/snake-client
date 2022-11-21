// Stores the active TCP connection object.
let connection;


const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput)
  return stdin;
};


// function to handle user inputs
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
      connection.write('Move: up')
    }
    if (key === 'a') {
      connection.write('Move: left')
    }
      if (key === 'd') {
        connection.write('Move: right')
      }
        if (key === 's') {
          connection.write('Move: down')
        }
          if (key === 'p') {
            connection.write('Say: get that bit!')
          }
            if (key === 'u') {
              connection.write('Say: Yo bruv')
            }
              if (key === 'k') {
                connection.write('Say: Gonna getcha!')
              }
}

module.exports = {setupInput};