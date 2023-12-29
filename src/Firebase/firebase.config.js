// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF4kzsZbUMGi92O6JO0EN1y2elU6D-ElI",
  authDomain: "bengal-dish-project.firebaseapp.com",
  projectId: "bengal-dish-project",
  storageBucket: "bengal-dish-project.appspot.com",
  messagingSenderId: "494783395659",
  appId: "1:494783395659:web:291e003a1f546924e6dace"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;