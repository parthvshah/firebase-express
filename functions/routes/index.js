const firebase = require('firebase-admin');
const db = firebase.firestore();

// Utils
var Utils = require('../fireStoreUtils');

// Routes
module.exports = (app) => {
    app.get('/fetchAllDocs', (req, res) => {
        var collection = req.body.collection;
        Utils.fetchAllDocs(db, collection).then(obj => {
            return res.status(200).send(obj);
        })
        .catch(err => {
            console.log(err);
            return res.status(500).send({
                success: false,
                message: 'Internal server error'
            });
        });
    });

    app.get('/fetchOneDoc', (req, res) => {
        var collection = req.body.collection;
        var document = req.body.document;
        Utils.fetchOneDoc(db, collection, document).then(obj => {
            return res.status(200).send(obj);
        })
        .catch(err => {
            console.log(err);
            return res.status(500).send({
                success: false,
                message: 'Internal server error'
            });
        });
    });

    app.post('/setDoc', (req, res) => {
        var collection = req.body.collection;
        var document = req.body.document;
        var data = req.body.data;
        var merge = req.body.merge;
        Utils.setDoc(db, collection, document, data, merge).then(obj => {
            return res.status(200).send(obj);
        })
        .catch(err => {
            console.log(err);
            return res.status(500).send({
                success: false,
                message: 'Internal server error'
            });
        });
    });

    app.post('/updateDoc', (req, res) => {
        var collection = req.body.collection;
        var document = req.body.document;
        var key = req.body.key;
        var value = req.body.value;

        console.log(res.body);
        Utils.updateDoc(db, collection, document, {[key]: value}).then(obj => {
            return res.status(200).send(obj);
        })
        .catch(err => {
            console.log(err);
            return res.status(500).send({
                success: false,
                message: 'Internal server error'
            });
        });
    });


    app.post('/newDoc', (req, res) => {
        var collection = req.body.collection;
        var document = req.body.document;
        // JSON
        var data = req.body.data;
        Utils.newDoc(db, collection, document, data).then(obj => {
            return res.status(200).send(obj);
        })
        .catch(err => {
            console.log(err);
            return res.status(500).send({
                success: false,
                message: 'Internal server error'
            });
        });
    });
}