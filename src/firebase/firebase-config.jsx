import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1WbUKa2BqqoohXdI2Phxeffi153dGR3o",
  authDomain: "learn-firebase-19a97.firebaseapp.com",
  projectId: "learn-firebase-19a97",
  storageBucket: "learn-firebase-19a97.appspot.com",
  messagingSenderId: "892321580716",
  appId: "1:892321580716:web:cfb5e0d8069ef2ea588109",
  measurementId: "G-H3FQVTPLMG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Int services
export const db = getFirestore(app);
