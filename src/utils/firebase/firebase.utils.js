import { initializeApp } from "firebase/app";
import {
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut, 
  onAuthStateChanged,
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

//we can have multiple providers for example we can import FacebookAuthProvider from firebase/auth
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
//sign in with google popup
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// instantiate the db
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth,additionalInformation={}) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  // console.log("userDocRef", userDocRef);

  //user data to know if there is a reference exists
  const userSnapshot = await getDoc(userDocRef);
  // console.log("userSnapshot", userSnapshot.exists());

  //if the user doesn't exist the we will add it
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating user ");
    }
  }

  return userDocRef;
};




export const creatAuthUserWithEmailAndPassword=async(email, password)=>{
  if(!email || !password) return;
 return await createUserWithEmailAndPassword(auth,email,password);

}



export const signInAuthUserWithEmailAndPassword=async(email, password)=>{
  if(!email || !password) return;
 return await signInWithEmailAndPassword(auth,email,password);

}

export const signOutUser = async () => await signOut(auth);
//once the suth change it will call the callback function 
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);