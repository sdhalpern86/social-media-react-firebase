const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://socialape-a68c7.firebaseio.com",
});

const db = admin.firestore();

module.exports = { admin, db };
