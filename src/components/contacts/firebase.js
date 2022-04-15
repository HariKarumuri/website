// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlVWhieo_S9DK7rSMdEAgFp0ceCq7Yapk",
  authDomain: "hound-force-website.firebaseapp.com",
  projectId: "hound-force-website",
  storageBucket: "hound-force-website.appspot.com",
  messagingSenderId: "449051635648",
  appId: "1:449051635648:web:d324b978c56404617ea225",
  measurementId: "G-K2YQW3QXHR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var db = getFirestore(app);

export  {db};

