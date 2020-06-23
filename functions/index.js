const functions = require("firebase-functions");
const app = require("express")();
const FBAuth = require("./util/fbAuth");

const { getAllScreams, postOneScream } = require("./handlers/screams");
const { signup, login } = require("./handlers/users");

//my application appears to be working without the reference to the private key
//const serviceAccount = require("../service-account-file.json");

//credential: admin.credential.cert(serviceAccount),
//databaseURL: "https://socialape-a68c7.firebaseio.com",
//});

// Scream routes
app.get("/screams", getAllScreams);
app.post("/scream", FBAuth, postOneScream);

// Users routes
app.post("/signup", signup);
app.post("/login", login);

exports.api = functions.https.onRequest(app);
