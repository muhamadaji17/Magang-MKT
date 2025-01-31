const Button = ({ children, type, className, onClick }) => {
  return (
    <>
      <button
        className={`bg-primary rounded-md ${className}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
