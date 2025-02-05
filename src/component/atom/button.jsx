const Button = ({ children, type, className, onClick }) => {
  return (
    <>
      <button
        className={`rounded-md ${className}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
