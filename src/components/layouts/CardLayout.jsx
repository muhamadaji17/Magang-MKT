const CardLayout = ({ children, className = "", ...props }) => {
  return (
    <div
      {...props}
      className={`bg-white p-4 rounded-lg shadow-md cursor-pointer card ${className}`}
    >
      {children}
    </div>
  );
};

export default CardLayout;
