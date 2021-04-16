import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBOeWIc8mZBz9w5lYPiZSOBHMthZL7iTyM",
    authDomain: "elroute-e9a62.firebaseapp.com",
    projectId: "elroute-e9a62",
    storageBucket: "elroute-e9a62.appspot.com",
    messagingSenderId: "794957452163",
    appId: "1:794957452163:web:a058f71f630b073babdcb6",
    measurementId: "G-11LL94F44C"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;