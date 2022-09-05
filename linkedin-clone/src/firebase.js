import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBborDktuz1ljZWL4HriqFb4PW2B3Jq93Q",
    authDomain: "linkedin-clone-8f754.firebaseapp.com",
    projectId: "linkedin-clone-8f754",
    storageBucket: "linkedin-clone-8f754.appspot.com",
    messagingSenderId: "832500597194",
    appId: "1:832500597194:web:43d6d3efc6954a79434f33"
  };

const app = firebase.initializeApp(firebaseConfig)
const db = app.firestore()
const auth = firebase.auth()

export {db, auth}