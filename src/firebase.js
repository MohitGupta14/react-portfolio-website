
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyD6TyOwnKeDCceN3wodj7zkGJ83BHs3cgk",
  authDomain: "my-portfolio-e0bde.firebaseapp.com",
  projectId: "my-portfolio-e0bde",
  storageBucket: "my-portfolio-e0bde.appspot.com",
  messagingSenderId: "758138058330",
  appId: "1:758138058330:web:1931aaa0c56e1a8a474a63",
  measurementId: "G-JJ732XDPDX"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);