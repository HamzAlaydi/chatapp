import firebase from "firebase/app";
import "firebase/auth";
export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyBMIPR_eVKEDaTbRaWL9hARcmBPh_4L0Ag",
    authDomain: "happychat-c5ef1.firebaseapp.com",
    projectId: "happychat-c5ef1",
    storageBucket: "happychat-c5ef1.appspot.com",
    messagingSenderId: "1006249688890",
    appId: "1:1006249688890:web:31366e64b7bb28146b5a03",
  })
  .auth();
