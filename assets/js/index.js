const admin = require("firebase-admin");
const serviceAccount = require("../../configs/secrets/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "shinhan-ekyc.appspot.com" // Thay bằng storageBucket của bạn
});

// Admin SDK initialized successfully
