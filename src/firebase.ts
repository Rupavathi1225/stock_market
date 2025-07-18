// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgt-SlgHBXquWdqkkVSZYqid40_UUBJmw",
  authDomain: "developer-196d6.firebaseapp.com",
  projectId: "developer-196d6",
  storageBucket: "developer-196d6.firebasestorage.app",
  messagingSenderId: "178507154722",
  appId: "1:178507154722:web:cfa365ff34521effce117b",
  measurementId: "G-PBBZLDBFTB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
