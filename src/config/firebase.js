
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyDD_1BKnId7RcmGmKzUkOkJFbGJ5SSb7Bc",
  authDomain: "tiktok---jornada-4bd4d.firebaseapp.com",
  projectId: "tiktok---jornada-4bd4d",
  storageBucket: "tiktok---jornada-4bd4d.appspot.com",
  messagingSenderId: "163455276751",
  appId: "1:163455276751:web:2818a29e73bb5442a349ba"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;