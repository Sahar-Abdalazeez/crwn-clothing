import { useState } from "react";
import Button from "../button/button.component";
import { FormInput } from "../formInput/form-input.component";
import { BUTTON_TYPE_CLASSES } from "../../constants/button.constants";
import "./sign-in.styles.scss";

import {
  creatAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultFields = {
  email: "",
  password: "",
};

export const SignInForm = () => {
  const [fieldsValues, setFieldsValues] = useState(defaultFields);
  const { email, password } = fieldsValues;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFieldsValues({ ...fieldsValues, [name]: value });
  };

  //function to redet form fields when we added the user
  const resetFormFields = () => {
    setFieldsValues(defaultFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
    console.log('user', user)
  };

  //function when submitting the form
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log('response',response)
      console.log("response", response);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert(" incorrect password for the email ");
          break;
        case "auth/user-not-found":
          alert(" no user  associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account </h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          onChange={handleChange}
          value={password}
        />
        <div className="btns-container">
          <Button buttonType={BUTTON_TYPE_CLASSES.INVERTED}>SIGN IN </Button>
         {/* if the type of the button is submit then by default  it will try to submit the form when show the popup for signing in with google 
         to prevent this we sit it's type to button  */}
          <Button type='button'
            buttonType={BUTTON_TYPE_CLASSES.GOOGLE}
            onClick={signInWithGoogle}
          >
            SIGN IN WITH GOOGLE
          </Button>
        </div>
      </form>
    </div>
  );
};
