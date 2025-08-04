// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAiWCjQB6EufU3GYthND25RgvowqB37M0U",
  authDomain: "nextstep-63f12.firebaseapp.com",
  projectId: "nextstep-63f12",
  storageBucket: "nextstep-63f12.appspot.com",
  messagingSenderId: "350910928532",
  appId: "1:113606248571115335314:web:3131b1a445233d57fdb58669206a7d9ae69b516b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
