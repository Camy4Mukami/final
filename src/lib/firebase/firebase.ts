// src/lib/firebase/firebase.ts
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCmaDpzYc-0RdcDK6413R-2X0dCiChzrIA",
  authDomain: "nailsnest.firebaseapp.com",
  projectId: "nailsnest",
  storageBucket: "nailsnest.firebasestorage.app",
  messagingSenderId: "332804275944",
  appId: "1:332804275944:web:98800713423d27b1ed535d",
  measurementId: "G-2QNB22CN7Z"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
// Analytics may not work during server-side rendering, so we need to check if window is defined
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export { app, db, auth, storage, analytics };