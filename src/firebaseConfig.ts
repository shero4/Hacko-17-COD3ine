import firebase from 'firebase'
import { questionBank } from './qa'
import axios, { AxiosRequestConfig } from 'axios'

const config = {
    apiKey: "AIzaSyCyjys0nRakr9O5c6QKfywJD2hCGt0IBfE",
    authDomain: "examtantra-89ee0.firebaseapp.com",
    projectId: "examtantra-89ee0",
    storageBucket: "examtantra-89ee0.appspot.com",
    messagingSenderId: "164717273487",
    appId: "1:164717273487:web:b9633ca910ea71a31d2bfa"
}

firebase.initializeApp(config)

export function getCurrentUser() {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            if (user) {
                resolve(user)
            } else {
                resolve(null)
            }
            unsubscribe()
        })
    })
}

export function logoutUser() {
    return firebase.auth().signOut();
}

export async function loginUser(email: string, password: string) {
    try {
        const res = await firebase.auth().signInWithEmailAndPassword(email, password);
        return res;
    } catch (err) {
        console.log(err);
        return false;
    }
}

export async function registerUser(email: string, password: string) {
    try {
        const res1 = await firebase.auth().createUserWithEmailAndPassword(email, password);
        let uid = res1.user?.uid
        const res2 = await firebase.firestore().collection('users').doc(uid).set({
            email: email,
            uid: uid
        })
        console.log(res1, res2)
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
}

export async function createCompetition() {
    try {
        let uid = firebase.auth().currentUser?.uid
        let email = firebase.auth().currentUser?.email
        let cid = Math.random().toString(36).slice(2) // random string
        await firebase.firestore().collection('competitions').doc(cid).set({
            time: firebase.firestore.FieldValue.serverTimestamp(),
            questionBank: questionBank
        })
        await firebase.firestore().collection('competitions').doc(cid).collection('users').doc(uid).set({
            score: 0,
            email: email,
        })
        await firebase.firestore().collection('users').doc(uid).collection('competitions').doc(cid).set({
            cid: cid
        })
        return cid
    } catch (err) {
        return err
    }
}

export async function addFriendToCompetition(cid: string, email: string) {
    try {
        let config: AxiosRequestConfig = {
            url: 'https://us-central1-examtantra-89ee0.cloudfunctions.net/getUid',
            method: 'GET',
            params: {
                email: email
            }
        }
        await axios(config).then(async res => {
            let uid = res.data.uid.uid //uid of friend
            await firebase.firestore().collection('competitions').doc(cid).collection('users').doc(uid).set({
                score: 0,
                email: email
            })
            await firebase.firestore().collection('users').doc(uid).collection('competitions').doc(cid).set({
                cid: cid
            })
        })
        return true
    } catch (err) {
        return err
    }

}

export async function checkAnswer(userAns: string, qno: number, cid: string) {
    try {
        let question = questionBank.find(o => o['q-id'] === qno)
        let uid = firebase.auth().currentUser?.uid
        if (userAns === question?.correctAns) {
            await firebase.firestore().collection('competitions').doc(cid).collection('users').doc(uid).update({
                score: firebase.firestore.FieldValue.increment(10)
            })
            console.log("fuck ya")
            return true
        } else {
            console.log(question)
            return false
        }
    } catch (err) {
        return console.log(err)
    }
}

export async function getLeaderboard(cid: string) {
    try {
        let leaderboard: any = []
        const res = await firebase.firestore().collection('competitions').doc(cid).collection('users').orderBy('score', 'desc').get()
        res.docs.map(doc => {
            leaderboard.push(doc.data())
        })
        console.log(leaderboard)
        return leaderboard
    } catch (err) {
        console.log(err)
    }
}

export async function getCompetitions() {
    try {
        let uid = firebase.auth().currentUser?.uid
        let comps: any = []
        const res = await firebase.firestore().collection('users').doc(uid).collection('competitions').get()
        res.docs.map(doc => {
            comps.push(doc.data())
        })
        console.log(comps)
        return comps
    } catch (err) {
        console.log(err)
    }
}