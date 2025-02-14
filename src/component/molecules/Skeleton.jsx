const Skeleton = () => {
  return (
    <div
      role="status"
      className="max-w-sm animate-pulse flex flex-col gap-5 py-5"
    >
      <div className="h-2.5 bg-gray-600 rounded-full w-48 mb-4"></div>
      <div className="h-2 bg-gray-600 rounded-full max-w-[360px] mb-2.5"></div>
      <div className="h-2 bg-gray-600 rounded-full mb-2.5"></div>
      <div className="h-2 bg-gray-600 rounded-full max-w-[330px] mb-2.5"></div>
      <div className="h-2 bg-gray-600 rounded-full max-w-[300px] mb-2.5"></div>
      <div className="h-2 bg-gray-600 rounded-full max-w-[360px]"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Skeleton;
