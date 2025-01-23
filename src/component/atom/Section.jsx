const Section = ({ children, className }) => {
  return (
    <>
      <div className={`w-full h-screen ${className}`}>{children}</div>
    </>
  );
};

export default Section;
