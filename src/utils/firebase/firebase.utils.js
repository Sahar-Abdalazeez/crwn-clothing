import { initializeApp } from "firebase/app";
import {
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  getAuth,
} from "firebase/auth";
//import firestore functions
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrz7OWflCJHo0hzDAduQfp8-RkiMQZxoU",
  authDomain: "crown-clothing-db-5b1f4.firebaseapp.com",
  projectId: "crown-clothing-db-5b1f4",
  storageBucket: "crown-clothing-db-5b1f4.appspot.com",
  messagingSenderId: "1075914782342",
  appId: "1:1075914782342:web:a34a5337bdaf4ff45c0307",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// define provider
const googleProvider = new GoogleAuthProvider();

//we can have multiple providers for wxample we can import FacebookAuthProvider from firebase/auth
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
//sign in with google popup
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

//sign in with google redirect
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// instantiate the db
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log("userDocRef", userDocRef);

  //user data to know if there is a reference exists
  const userSnapshot = await getDoc(userDocRef);
  console.log("userSnapshot", userSnapshot.exists());

  //if the user doesn't exist the we will add it
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating user ");
    }
  }

  return userDocRef;
};
