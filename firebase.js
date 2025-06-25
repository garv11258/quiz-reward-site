
// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBarP9CByaYu6NotuNQcZt_gGyWPjoByLM",
  authDomain: "quiz-reward-67257.firebaseapp.com",
  projectId: "quiz-reward-67257",
  storageBucket: "quiz-reward-67257.firebasestorage.app",
  messagingSenderId: "186940425104",
  appId: "1:186940425104:web:037923ac55b01258b02915",
  measurementId: "G-7RL385RJMY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
