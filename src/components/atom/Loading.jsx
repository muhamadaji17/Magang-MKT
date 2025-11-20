const Loading = ({ type = "default", className = "" }) => {
  return type === "button" ? (
    <div className="loader"></div>
  ) : (
    <div
      className={`flex justify-center items-center min-h-[600px] ${className}`}
    >
      <div className="loader"></div>
    </div>
  );
};

export default Loading;
