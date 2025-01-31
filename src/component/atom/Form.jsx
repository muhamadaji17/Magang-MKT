const Form = ({ className, children, onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit} className={`p-4 rounded-md ${className} `}>
        {children}
      </form>
    </>
  );
};

export default Form;
