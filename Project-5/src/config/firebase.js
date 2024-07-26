// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW-0PJ_z4Iu4nVB8sJaqIt2GsVnYijijw",
  authDomain: "contact-app-161ec.firebaseapp.com",
  projectId: "contact-app-161ec",
  storageBucket: "contact-app-161ec.appspot.com",
  messagingSenderId: "566551246525",
  appId: "1:566551246525:web:b277a75ff545c8ebd5a9d4"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);