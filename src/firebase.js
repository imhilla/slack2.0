import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAUUGYTn1gJ1Ozu-hIhzJ5iwAqZqpGKB2k",
  authDomain: "slack-20b65.firebaseapp.com",
  projectId: "slack-20b65",
  storageBucket: "slack-20b65.appspot.com",
  messagingSenderId: "690034360485",
  appId: "1:690034360485:web:26fab921eb0076ff6f4d4c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db} 