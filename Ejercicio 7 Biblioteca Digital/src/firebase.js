import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO7jsx9Em8jVpIRVVuUFKwwf9iC3x3OSE",
  authDomain: "proyectoreact-76e53.firebaseapp.com",
  projectId: "proyectoreact-76e53",
  storageBucket: "proyectoreact-76e53.firebasestorage.app",
  messagingSenderId: "224890091730",
  appId: "1:224890091730:web:e060e7fcfb06f13943150b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;