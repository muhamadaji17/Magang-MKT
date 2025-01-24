const Form = ({ className, children, onSubmit }) => {
  return (
    <>
      <form
        onSubmit={onSubmit}
        className={`border-2 p-4 rounded-md ${className} `}
      >
        {children}
      </form>
    </>
  );
};

export default Form;
