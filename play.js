const { connect } = require('./client');
const { setupInput } = require('./input');
const { IP, PORT } = require("./constants");

let connection;

console.log("Connecting ...");

setupInput(connect(connection));


