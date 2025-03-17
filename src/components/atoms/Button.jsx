const Button = ({ type, className, onClick, children, ...props }) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type || "button"}
        className={`p-2 px-6 bg-blue-800 text-sm rounded-md shadow-black hover:shadow-xl transition-shadow duration-200 ${className}`}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
