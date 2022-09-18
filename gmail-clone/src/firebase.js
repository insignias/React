import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5oQPnatCIosCggzA-mexbmD-StmLq12U",
  authDomain: "clone-5e56a.firebaseapp.com",
  projectId: "clone-5e56a",
  storageBucket: "clone-5e56a.appspot.com",
  messagingSenderId: "535698993767",
  appId: "1:535698993767:web:d48d4d231d583ab3c91ac2"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {db, auth, provider};