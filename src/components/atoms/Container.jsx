const Container = ({ children, className, ...props }) => {
  return (
    <>
      <div
        className={`w-full px-8 min-h-screen pt-24 space-y-4 bg-slate-300 py-4 ${className}`}
        {...props}
      >
        {children}
      </div>
    </>
  );
};

export default Container;
