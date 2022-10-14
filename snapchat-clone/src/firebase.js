import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB9uQH9xIu7RU4YY9eGzudwzEpnFFxsAg0",
  authDomain: "snapchat-clone-c820f.firebaseapp.com",
  projectId: "snapchat-clone-c820f",
  storageBucket: "snapchat-clone-c820f.appspot.com",
  messagingSenderId: "695609335160",
  appId: "1:695609335160:web:971dee7c4b3d3b5443bc8d"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, storage };