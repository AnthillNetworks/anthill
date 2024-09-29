const firebase = require('firebase/compat/app');
require('firebase/compat/firestore');
require("firebase/compat/storage");

const firebaseConfig = {
    apiKey: "AIzaSyCeMvgogv0vgb8hls-V9Hd7QyTH7AvXU8c",
    authDomain: "anthillnetworks-dced8.firebaseapp.com",
    projectId: "anthillnetworks-dced8",
    storageBucket: "anthillnetworks-dced8.appspot.com",
    messagingSenderId: "35021166961",
    appId: "1:35021166961:web:cec01282855d5951cc3ed0",
    measurementId: "G-RRF492HTNX"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();

export { db,storage };



