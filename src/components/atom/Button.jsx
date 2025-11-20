const Button = ({ children, className, ...props }) => {
  return (
    <button {...props} className={`cursor-pointer ${className}`}>
      {children}
    </button>
  );
};

export default Button;
