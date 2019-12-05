import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC4W0yYTRQkbrLpiZWGgaRv24M1MbhHqms",
    authDomain: "crown-db-d3298.firebaseapp.com",
    databaseURL: "https://crown-db-d3298.firebaseio.com",
    projectId: "crown-db-d3298",
    storageBucket: "crown-db-d3298.appspot.com",
    messagingSenderId: "811332597151",
    appId: "1:811332597151:web:450a3b7b030cb7442bf9aa"
  }

 
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log(error)
    }
  }

  return userRef;
}  


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;