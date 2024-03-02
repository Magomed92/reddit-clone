import { getAuth } from "firebase/auth";
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAoJw_belZ9tsEjmIY3SFIreBV7J0CO55U",
  authDomain: "reddit-clone-5d30a.firebaseapp.com",
  projectId: "reddit-clone-5d30a",
  storageBucket: "reddit-clone-5d30a.appspot.com",
  messagingSenderId: "1030134278572",
  appId: "1:1030134278572:web:e6d7b202c62bfb9ce77209",
};

const app = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, firestore, auth, storage };
