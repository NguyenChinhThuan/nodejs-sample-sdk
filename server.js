const config = require("./src/config/index").DEFAULT;

/**
 * Create HTTP server.
 */

// connect mongodb
console.log("connect mongodb");
const mongodb = require("./src/config/mongodb");

console.log("require app ");
const app = require("./src/app");
