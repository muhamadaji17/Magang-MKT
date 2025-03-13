const Card = ({ children, className, ...props }) => {
  return (
    <div className={`rounded-sm shadow-md  ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
