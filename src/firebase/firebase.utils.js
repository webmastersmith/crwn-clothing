import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "crwn-db-c21f9.firebaseapp.com",
  projectId: "crwn-db-c21f9",
  storageBucket: "crwn-db-c21f9.appspot.com",
  messagingSenderId: "1093944678784",
  appId: "1:1093944678784:web:7c84759c627f04973d8965",
  measurementId: "G-G62XTR2S1Y",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log("firestore", firestore.doc("users/E78h3LKKoT9LfhHcFShK"));
  // console.log(firestore.doc("/users/3LKKoT9LfhHcF"));
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;