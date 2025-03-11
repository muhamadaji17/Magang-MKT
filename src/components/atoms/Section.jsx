const Section = ({ children, className, ...props }) => {
  return (
    <>
      <div className={`w-full ${className}`} {...props}>
        {children}
      </div>
    </>
  );
};

export default Section;
