import { useState, useContext } from "react";
import {
  creatAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import "./sign-up-form.styles.scss";
import { FormInput } from "../formInput/form-input.component";
import Button from "../button/button.component";
import { BUTTON_TYPE_CLASSES } from "../../constants/button.constants";

//initial field value =>empty fields
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  //function to redet form fields when we added the user
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  //on change the value of any field
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  //function when submitting the form
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match ");
      return;
    }

    try {
      const { user } = await creatAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert(" Cannot create user ,Email alredy used  ");
      } else {
        console.log(error);
      }
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account ?</h2>
      <span>Signup with your email and password </span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          name="displayName"
          onChange={handleChange}
          value={displayName}
        />

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
        <FormInput
          label="Confirm Password "
          type="password"
          required
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
        />

        <Button>Sign up </Button>
      </form>
    </div>
  );
};
