import firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAy5BBpUd-Dgmhm8lHxmaaX3qw94tJq4J0",
    authDomain: "contactmanager-e4c6e.firebaseapp.com",
    databaseURL: "https://contactmanager-e4c6e.firebaseio.com",
    projectId: "contactmanager-e4c6e",
    storageBucket: "contactmanager-e4c6e.appspot.com",
    messagingSenderId: "910666988843",
    appId: "1:910666988843:web:cbab0dfeeb594e41c4996e"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;