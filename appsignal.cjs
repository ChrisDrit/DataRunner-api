require('dotenv').config();
const { Appsignal } = require("@appsignal/nodejs");

console.log("AppSignal Push API Key:", process.env.APPSIGNAL_PUSH_API_KEY ? "***present***" : "missing");

new Appsignal({
  active: true,
  name: "API",
  pushApiKey: process.env.APPSIGNAL_PUSH_API_KEY,
});

