// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAT9kOrSjd24p34WX2mrunBmLW7Ma5ijqE",
  authDomain: "korona-taxi-ef833.firebaseapp.com",
  projectId: "korona-taxi-ef833",
  storageBucket: "korona-taxi-ef833.appspot.com",
  messagingSenderId: "651502423878",
  appId: "1:651502423878:web:34d738e5a0f77a86a99f47"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
