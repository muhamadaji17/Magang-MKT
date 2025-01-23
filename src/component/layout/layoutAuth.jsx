/* eslint-disable react/prop-types */
const LayoutAuth = ({ children, judul }) => {
  return (
    <div className="w-full min-h-screen bg-sky-400">
      <div className="flex justify-center items-center min-h-screen min-w-screen ">
        <div className=" flex justify-center  items-center">
          <div className={`w-fit h-fit p-5 bg-white rounded-md`}>
            <div>
              <h1 className="text-xl text-center    ">Form {judul}</h1>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutAuth;
