require('dotenv').config();
const { Appsignal } = require("@appsignal/nodejs");

const appsignal = new Appsignal({
  active: true,
  name: "API",
  pushApiKey: process.env.APPSIGNAL_PUSH_API_KEY,
});

// Create AppSignal logger for sending raw logs
const logger = Appsignal.logger("fastify", "info");

// Export the logger for use in other parts of the application
module.exports = { appsignal, logger };

