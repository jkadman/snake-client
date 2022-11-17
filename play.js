const { connect } = require('./client');
const { setupInput } = require('./input');

let connection;

console.log("Connecting ...");
// connect();

setupInput(connect(connection));


