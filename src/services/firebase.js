// src/services/firebase.js
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBDZ0NYk1G7DU4spzYPs4OCFMjoeJwspqE",
  authDomain: "unima-edu-society.firebaseapp.com",
  projectId: "unima-edu-society",
  storageBucket: "unima-edu-society.firebasestorage.app",
  messagingSenderId: "360180458531",
  appId: "1:360180458531:web:fcb2d28fa69f9ef2da7d96",
}

const app = initializeApp(firebaseConfig)

//   Authentication (admin login later)
export const auth = getAuth(app)

//  Firestore database (announcements & executives)
export const db = getFirestore(app)

//  Storage (images)
export const storage = getStorage(app)
