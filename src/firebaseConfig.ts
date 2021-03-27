import firebase from 'firebase'

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
            if(user) {
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
    } catch(err) {
        console.log(err);
        return false;
    }
}

export async function registerUser(email: string, password: string) {
    try {
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
        return true;
    } catch(err) {
        console.log(err);
        return false;
    }
}