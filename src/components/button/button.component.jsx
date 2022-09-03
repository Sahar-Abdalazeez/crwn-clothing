import './button.styles.scss';

  const Button = ({ children, buttonType, ...otherProps }) => {
    return (
      <button
        {...otherProps}
        className={`button-container ${buttonType}`}>
        {children}
      </button>
    );
  };
  
export default Button;
  