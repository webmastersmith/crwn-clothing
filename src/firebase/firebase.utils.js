import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: 'AIzaSyBchyW7yw_lpXBXrmxQca6BY3zZws4mrTM',
  authDomain: 'crwn-db-c21f9.firebaseapp.com',
  projectId: 'crwn-db-c21f9',
  storageBucket: 'crwn-db-c21f9.appspot.com',
  messagingSenderId: '1093944678784',
  appId: '1:1093944678784:web:7c84759c627f04973d8965',
  measurementId: 'G-G62XTR2S1Y',
}

firebase.initializeApp(firebaseConfig)

// called in App.js. Purpose: add user to database if not already in there.
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // userAuth object is supplied by google after sign in.
  if (!userAuth) return

  // query firestore if uid exist. Will always get back object. 'Exist' will be false if user does not exist.
  // this is the userRef object that will get returned. It has methods attached to get or set properties to firestore.
  const userRef = firestore.doc(`users/${userAuth.uid}`)

  // snapShot name is misleading.  Not truly a 'snapShot' just getting data one time. 'get' access to data method and if uid exist. The userRef obj is seperated instead of chained .get() to userRef because userRef obj is returned to 'App.js' and a listener is called to watch data for any change. If user changes state, like if someone else log's in from same browser without this person logging out first, state will be updated with the new user.
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

// get access to collection object. Firebase makes this object for us, then if we add documents to it, firebase will create them under the object.  'collections' object will not show in database untill it has documents in it.
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey)

  // batch groups all data (upto 500 documents) for one big upload to firestore
  const batch = firestore.batch()
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc() //tells firebase to ramdonly generate new id for document. If you give ().doc('someValue')) that will be the key, otherwise firestore will generate key.

    //then upload newDocRef into batch object
    batch.set(newDocRef, obj)
  })
  //returns
  return await batch.commit()
}

export const convertCollectionSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data()

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    }
  })
  return transformedCollection.reduce(
    (acc, obj) => ({ ...acc, [obj.title.toLowerCase()]: obj }),
    {}
  )
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })
// will return auth object w/ uid or null if user not logged in
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase
