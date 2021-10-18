const firebase = require('firebase/app')

const config = {
    apiKey: "AIzaSyClrwVwart_ufrYyHsRx1k9_UR0TfNaF9k",
    authDomain: "jenosizeauth.firebaseapp.com",
    databaseURL: "https://jenosizeauth-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "jenosizeauth",
    storageBucket: "jenosizeauth.appspot.com",
    messagingSenderId: "165192190620",
    appId: "1:165192190620:web:c0e72e9438bf4319dc7b59",
    measurementId: "G-YB8012Q6EH"
};

//Initialize Firebase
const firebaseApp = firebase.initializeApp(config)

module.exports = {
    firebaseApp
}