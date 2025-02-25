import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";

// Ensure Firebase Admin is initialized only once
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(), // Uses GOOGLE_APPLICATION_CREDENTIALS env variable
  });
}

const db = getFirestore();
export { db };
