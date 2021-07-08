import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
}

firebase.initializeApp(config)

// called in App.js. Purpose: add user to database if not already in there.
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // userAuth object is supplied by google after sign in.
  if (!userAuth) return

  // query firestore if uid exist. Will always get back object. 'Exist' will be false if user does not exist.
  // this is the userRef object that will get returned. It has methods attached to get or set properties to firestore.
  const userRef = firestore.doc(`users/${userAuth.uid}`)

  // snapShot name is misleading.  Not truly a 'snapShot' just getting data one time. 'get' access to data method and if uid exist. This is seperated instead of chained to userRef because userRef get's returned to 'App.js' and a listener is called to watch data for any change. If user changes state, like if someone else log's in from same browser without this person loggin out first, state will reflect the new user.
  const snapShot = await userRef.get()

  // if uid not in firestore, create document from info and set to firestore/users.
  if (!snapShot.exists) {
    console.log('snapShot does NOT exist -creating it in firestore!')
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
      console.log(
        `User: ${displayName} with email: ${email} and id: ${userAuth.uid} was created successfully on ${createdAt}`
      )
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  // always return userRef to add to local state.
  return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
// will return auth object w/ uid or null if user not logged in
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
