import { BaseButton, GoogleButton, InvertedButton } from "./button.styles.js";
import { BUTTON_TYPE_CLASSES } from '../../constants/button.constants'
const getButton = (buttonType = BUTTON_TYPE_CLASSES.BASE) => (
  {
    [BUTTON_TYPE_CLASSES.BASE]: BaseButton,
    [BUTTON_TYPE_CLASSES.GOOGLE]: GoogleButton,
    [BUTTON_TYPE_CLASSES.INVERTED]: InvertedButton,

  }[buttonType]

)

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return (
    <CustomButton {...otherProps} >
      {children}
    </CustomButton>
  );
};

export default Button;
