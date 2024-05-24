import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyByVhWWm3wTGSZlqOOX_fCgCDdRraP6Zco",
    authDomain: "anthillnetworks-bae26.firebaseapp.com",
    projectId: "anthillnetworks-bae26",
    storageBucket: "anthillnetworks-bae26.appspot.com",
    messagingSenderId: "315338940616",
    appId: "1:315338940616:web:1c825338cf64df961e05fd",
    measurementId: "G-1JRD8MX8R3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, analytics };
