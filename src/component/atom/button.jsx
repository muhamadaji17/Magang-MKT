const Button = ({ children, type, className }) => {
  return (
    <>
      <button className={`p-2 bg-primary rounded-md ${className}`} type={type}>
        {children}
      </button>
    </>
  );
};

export default Button;
