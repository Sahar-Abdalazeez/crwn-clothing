import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
  } from "../../utils/firebase/firebase.utils";
  
  const SignIn = () => {
    // whenever we request data from data base we use async and await
    const logGoogleUser = async () => {
      const { user } = await signInWithGooglePopup();
      console.log("user", user);
      //the bottom line just point to some place in the database
      createUserDocumentFromAuth(user);
    };
  
    return (
      <div>
        sign in page
        <button onClick={logGoogleUser}>sign in with google popup </button>
      </div>
    );
  };
  
  export default SignIn;
  