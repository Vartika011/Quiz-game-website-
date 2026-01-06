// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "quiz-app-d84c2.firebaseapp.com",
  projectId: "quiz-app-d84c2",
  storageBucket: "quiz-app-d84c2.firebasestorage.app",
  messagingSenderId: "812627420971",
  appId: "1:812627420971:web:aa07048f10fd993a59476e",
  measurementId: "G-NK9B4VETNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
export const db = getFirestore(app);

export default app;
