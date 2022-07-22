import './button.styles.scss';
import {BUTTON_TYPE_CLASSES} from '../../constants/button.constants';

  const Button = ({ children, buttonType, ...otherProps }) => {
console.log('props',buttonType )
    return (
      <button
        {...otherProps}
        className={`button-container ${buttonType}`}>
        {children}
      </button>
    );
  };
  
export default Button;
  