/* eslint-disable react/prop-types */
const Button = ({ children, className, type, disabled, ...props }) => {
  return (
    <button
      {...props}
      type={type}
      disabled={disabled}
      className={`py-2   font-semibold  dark:text-white rounded-md  ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
