const Form = ({ children, className, onSubmit }) => {
  return (
    <>
      <form
        onSubmit={onSubmit}
        className={`p-2 rounded-md border-2 flex flex-col gap-2 w-1/3 ${className}`}
      >
        {children}
      </form>
    </>
  );
};

export default Form;
