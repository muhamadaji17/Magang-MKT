/* eslint-disable react/prop-types */
const LayoutAuth = ({ children, judul }) => {
  return (
    <div className="flex bg-gray-100">
      <div className="flex justify-center items-center min-h-screen  w-[70%]">
        <div className=" flex justify-center  items-center">
          <img
            src="/images/logo/sams-logo.png"
            alt="Logo Sams"
            className="w-[550px] h-96 "
          />
        </div>
      </div>

      <div
        className={`flex justify-center items-center  ${
          children && "bg-white"
        } min-h-screen w-[30%]`}
      >
        <div className=" w-full px-20">
          <h1 className="text-xl text-center    ">Form {judul}</h1>

          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default LayoutAuth;
