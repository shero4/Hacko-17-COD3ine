const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });
const admin = require('firebase-admin');
admin.initializeApp();

exports.getUid = functions.https.onRequest((req, res) => {
    const email = req.query.email;
    cors(req, res, async () => {
        const uid = await admin.auth().getUserByEmail(email);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send({
            uid: uid
        });
    })
})

exports.getLeaderboard = functions.https.onRequest((req, res) => {
    const cid = req.query.cid;
    cors(req, res, async () => {
        const uid = await admin.auth().getUserByEmail(email);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send({
            uid: uid
        });
    })
})