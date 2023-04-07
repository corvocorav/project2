
// Import the functions you need from the SDKs you need


import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOO5H5AWAEK4vAZ6qCpH4ejCBFOJi-Ajg",
    authDomain: "workoutscheduler-75fe0.firebaseapp.com",
    projectId: "workoutscheduler-75fe0",
    storageBucket: "workoutscheduler-75fe0.appspot.com",
    messagingSenderId: "449025911361",
    appId: "1:449025911361:web:f2ac262aeec651a2deb4c0"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getAuth, signInAnonymously } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const db = getFirestore(app);

export { db }
export { getAuth}
export { signInAnonymously}


