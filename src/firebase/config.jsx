import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKK21os9H9MdV-iAEYQbaV3u4SSAo70fY",
  authDomain: "miniblog-lifedev.firebaseapp.com",
  projectId: "miniblog-lifedev",
storageBucket: "miniblog-lifedev.firebasestorage.app",
  messagingSenderId: "1007435164404",
  appId: "1:1007435164404:web:074d05148151b5eb5a8ca1",
  measurementId: "G-75YQXGP9RJ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { db, auth, googleProvider };
