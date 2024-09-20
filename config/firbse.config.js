const fbAdmin = require("firebase-admin");
const serviceCredentianls = require("/etc/secret/backend-domination-firebase-adminsdk-xi1is-5a3b954d26.json");

fbAdmin.initializeApp({
    credential: fbAdmin.credential.cert(serviceCredentianls),
    storageBucket: "backend-domination.appspot.com"
});

module.exports = fbAdmin;