import { useEffect } from "react";
//method that
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import React from "react";

const SignIn = () => {
  // whenever we request data from data base we use async and await
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    //the bottom line just point to some place in the database
    createUserDocumentFromAuth(user);
  };
  //this useEffect is needed when i want to use signInWithGoogleRedirect for now i'll go with signInWithGooglePopup
  // useEffect(async()=>{
  // const response = await getRedirectResult(auth);
  // if(response)
  // {
  //   const userDocRef = await createUserDocumentFromAuth(response.user);
  // console.log('userDocRef', userDocRef);
  // }
  // console.log('redirect response ', response);
  // },[]);

  //this code is not needed since if i want to use signInWithGoogleRedirect i could use it directly and get it's result
  //by using getRedirectResult (auth)
  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   //any code after the sigining in with redirect will not be executed
  //  console.log('user redirect', {user});
  // };

  return (
    <div>
      sign in page
      <button onClick={logGoogleUser}>sign in with google popup </button>
      {/* the commented code below is not needed since i'll go with signInWithGooglePopup */}
      {/* <button onClick={logGoogleRedirectUser}>sign in with google redirect </button> */}
      {/* <button onClick={signInWithGoogleRedirect}>sign in with google redirect </button> */}
    </div>
  );
};

export default SignIn;
