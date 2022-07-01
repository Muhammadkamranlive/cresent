

var admin = require("firebase-admin");

var serviceAccount = require("./crestexmillfsd-firebase-adminsdk-qdx4k-377179fa0f.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


module.exports = admin;