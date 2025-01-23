const Label = ({ children, htmlFfor }) => {
  return (
    <>
      <label htmlFor={htmlFfor}>{children}</label>
    </>
  );
};

export default Label;
