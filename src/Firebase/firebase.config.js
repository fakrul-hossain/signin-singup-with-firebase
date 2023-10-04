// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5UGA3nbcVumvwYIEktRtmVbPfUkhLN6U",
  authDomain: "user-email-password-auth-fe53c.firebaseapp.com",
  projectId: "user-email-password-auth-fe53c",
  storageBucket: "user-email-password-auth-fe53c.appspot.com",
  messagingSenderId: "777071194083",
  appId: "1:777071194083:web:fa9fd16f415271c49f3ad6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;