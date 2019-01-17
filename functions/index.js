const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');

// Firebase initialization
const firebaseApp = firebase.initializeApp(
	functions.config().firebase
);

// Express instance
const app = express();

// Set up for urlencoded bodies
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Setting up routes
require("./routes")(app);

// Run express as a firebase cloud function
exports.app = functions.https.onRequest(app);
