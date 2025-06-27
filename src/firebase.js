import {initializeApp} from "firebase/app"
import {getAuth,GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyCrXu723MGTHWkbVjDmQM3ufk2sCu85w50",
    authDomain: "jobnest-36eaa.firebaseapp.com",
    projectId: "jobnest-36eaa",
    storageBucket: "jobnest-36eaa.firebasestorage.app",
    messagingSenderId: "301019820681",
    appId: "1:301019820681:web:6c1b48b6d87ba39bef4c58",
    measurementId: "G-D21VLRN4SB"
  };
  

  const app = initializeApp(firebaseConfig)
  export const Auth = getAuth(app)
  export const googleProvider = new GoogleAuthProvider()