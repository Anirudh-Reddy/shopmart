import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDQ_uXwgi4h6A3xkz_WLmqRfVE3vXSj7ak",
    authDomain: "shopmart-d1a28.firebaseapp.com",
    projectId: "shopmart-d1a28",
    storageBucket: "shopmart-d1a28.appspot.com",
    messagingSenderId: "297859044546",
    appId: "1:297859044546:web:6e35130327a13baf46d75b",
    measurementId: "G-15GENTD53V"
}); 

const auth = firebase.auth();

export { auth };