const Container = ({ children, className, ...props }) => {
  return (
    <>
      <div
        className={`w-full px-8 min-h-screen space-y-4 bg-slate-300 py-4 ${
          className ? className : "pt-24"
        }`}
        {...props}
      >
        {children}
      </div>
    </>
  );
};

export default Container;
