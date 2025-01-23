const Form = ({ className, children }) => {
  return (
    <>
      <form className={`border-2 p-4 rounded-md ${className} `}>
        {children}
      </form>
    </>
  );
};

export default Form;
