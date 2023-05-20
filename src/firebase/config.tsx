import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqD0pt4g8Gr_8PAahXEttSRCiC6PxEz3g",
  authDomain: "fir-auth-3d417.firebaseapp.com",
  projectId: "fir-auth-3d417",
  storageBucket: "fir-auth-3d417.appspot.com",
  messagingSenderId: "315667400873",
  appId: "1:315667400873:web:0f6a9434827d612d5741b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
