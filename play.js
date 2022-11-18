const { connect } = require('./client');
const { setupInput } = require('./input');
const { IP, PORT } = require("./constants");

// console.log(IP)
let connection;

console.log("Connecting ...");
// connect();

setupInput(connect(connection));


