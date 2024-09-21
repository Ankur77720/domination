const FirebaseStorage = require('multer-firebase-storage')
const fbAdmin = require("./firbse.config");
const serviceCredentianls = require("../etc/secrets/backend-domination-firebase-adminsdk-xi1is-5a3b954d26.json");
const multer = require('multer')


const storage = FirebaseStorage({
    bucketName: "backend-domination.appspot.com",
    credentials: fbAdmin.credential.cert(serviceCredentianls),
    unique: true,
    public: true,
})


const upload = multer({
    storage: storage
})

module.exports = upload;