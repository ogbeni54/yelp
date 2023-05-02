// import firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// import 'firebase/auth'

import 'firebase/storage'



const firebaseConfig = {
    apiKey: "AIzaSyAeh-_yVKVv4ZT2bG_FblQ71Y-S0G74x7U",
    authDomain: "yelp-camp-a7280.firebaseapp.com",
    projectId: "yelp-camp-a7280",
    storageBucket: "yelp-camp-a7280.appspot.com",
    messagingSenderId: "537653440917",
    appId: "1:537653440917:web:41d9355dcf9a44971f869c"
  };


// Below is the one that connects the fronted with the backend

//   init firebase 
const app = initializeApp(firebaseConfig)

// Below initializes each services that was imported from the firebase library 
// init firestore
// const projectFirestore = firebase.firestore()


export const campData = getFirestore(app)


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;