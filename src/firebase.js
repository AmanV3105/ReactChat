import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCO9tEgDX2JCfNwtyC7LasfpA5uoxXLYqc",
  authDomain: "reactchat-46008.firebaseapp.com",
  projectId: "reactchat-46008",
  storageBucket: "reactchat-46008.appspot.com",
  messagingSenderId: "1006116605742",
  appId: "1:1006116605742:web:c02754db32e0632316f4bf",
  measurementId: "G-66R7Q06N8T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
