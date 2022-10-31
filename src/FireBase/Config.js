import firebase from "firebase/compat/app"
import  'firebase/compat/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAcdKfxvIUa3sVAFc7_q33vf1yiG__PmBI",
    authDomain: "pdptask1.firebaseapp.com",
    projectId: "pdptask1",
    storageBucket: "pdptask1.appspot.com",
    messagingSenderId: "482854876008",
    appId: "1:482854876008:web:229e596981de4e49ab1cdd",
    measurementId: "G-05P3PD5NQP"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  export default db