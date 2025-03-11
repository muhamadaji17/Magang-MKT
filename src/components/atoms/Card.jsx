const Card = ({ children, className, ...props }) => {
  return (
    <div className={`rounded-sm shadow-lg  ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
