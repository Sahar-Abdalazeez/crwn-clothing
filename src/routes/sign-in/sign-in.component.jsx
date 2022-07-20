import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import {SignUpForm} from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {
  // whenever we request data from data base we use async and await
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };


  return (
    <div>
      sign in page
      <button onClick={logGoogleUser}>sign in with google popup </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
