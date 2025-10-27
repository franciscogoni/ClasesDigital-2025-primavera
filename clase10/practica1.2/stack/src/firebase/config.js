import app from "firebase/app"
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDlnH0UqznoxMWe4mVL906CsGkEIMxhZs4",
  authDomain: "clase11-primavera.firebaseapp.com",
  projectId: "clase11-primavera",
  storageBucket: "clase11-primavera.firebasestorage.app",
  messagingSenderId: "419277934465",
  appId: "1:419277934465:web:49a5350f23ac284bbea280"
};

app.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const db = app.firestore()
export const storage = app.storage()