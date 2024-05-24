import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCeMvgogv0vgb8hls-V9Hd7QyTH7AvXU8c",
    authDomain: "anthillnetworks-dced8.firebaseapp.com",
    projectId: "anthillnetworks-dced8",
    storageBucket: "anthillnetworks-dced8.appspot.com",
    messagingSenderId: "35021166961",
    appId: "1:35021166961:web:cec01282855d5951cc3ed0",
    measurementId: "G-RRF492HTNX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, analytics };
