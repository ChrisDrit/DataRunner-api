require('dotenv').config();
const { Appsignal } = require("@appsignal/nodejs");

console.log("NODE_ENV:", process.env.NODE_ENV || "not set");
console.log("AppSignal environment will be:", process.env.NODE_ENV || "development");

const appsignal = new Appsignal({
  active: true,
  name: "API",
  environment: process.env.NODE_ENV || "development",
  pushApiKey: process.env.APPSIGNAL_PUSH_API_KEY,
});

// Create AppSignal logger for sending raw logs
const logger = Appsignal.logger("fastify", "info");

// Export the logger for use in other parts of the application
module.exports = { appsignal, logger };

