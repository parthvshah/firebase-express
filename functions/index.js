const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');

// Firebase initialization
const firebaseApp = firebase.initializeApp(
	functions.config().firebase
);

// Setting up routes
const app = express();
require("./routes")(app);

// Set up for urlencoded bodies
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


// Run express as a firebase cloud function
exports.app = functions.https.onRequest(app);
