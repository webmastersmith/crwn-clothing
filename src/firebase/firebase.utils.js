import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBchyW7yw_lpXBXrmxQca6BY3zZws4mrTM",
  authDomain: "crwn-db-c21f9.firebaseapp.com",
  projectId: "crwn-db-c21f9",
  storageBucket: "crwn-db-c21f9.appspot.com",
  messagingSenderId: "1093944678784",
  appId: "1:1093944678784:web:7c84759c627f04973d8965",
  measurementId: "G-G62XTR2S1Y",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
