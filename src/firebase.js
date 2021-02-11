import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBydRiEoZE1fbjHXOEsq7MoIOn6IqXRsZ4",
    authDomain: "reddit-clone-cef6c.firebaseapp.com",
    projectId: "reddit-clone-cef6c",
    storageBucket: "reddit-clone-cef6c.appspot.com",
    messagingSenderId: "268435638413",
    appId: "1:268435638413:web:be2d494bf63b8ed16e7ac4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase