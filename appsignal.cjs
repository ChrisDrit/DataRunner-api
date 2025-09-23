require('dotenv').config();
const { Appsignal } = require("@appsignal/nodejs");

new Appsignal({
  active: true,
  name: "API",
  pushApiKey: process.env.APPSIGNAL_PUSH_API_KEY,
});

