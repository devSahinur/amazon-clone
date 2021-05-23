import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBBosKLEFfKftjVw-Y0-2X64SpKQFnLVj0",
    authDomain: "clone-sahinur.firebaseapp.com",
    projectId: "clone-sahinur",
    storageBucket: "clone-sahinur.appspot.com",
    messagingSenderId: "1096043695696",
    appId: "1:1096043695696:web:9b77edf7da8dfcbe318b55"
  };

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app()

const db = firebase.firestore()

export default db