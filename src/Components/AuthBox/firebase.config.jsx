// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCczBZ1g9-VT1h7IdY4nf72IKsLF8EByZY",
  authDomain: "bike-hunt-3ce77.firebaseapp.com",
  projectId: "bike-hunt-3ce77",
  storageBucket: "bike-hunt-3ce77.appspot.com",
  messagingSenderId: "315643536833",
  appId: "1:315643536833:web:197e953262fb64214a3b40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;