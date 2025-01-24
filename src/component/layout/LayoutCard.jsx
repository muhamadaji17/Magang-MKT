/* eslint-disable react/prop-types */

const LayoutCard = ({ children }) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="rounded-lg  border border-stroke bg-white shadow-4 dark:border-strokedark dark:bg-boxdark overflow-auto ">
          <div className="md:p-4 px-2 py-5">{children}</div>
        </div>
      </div>
    </>
  );
};

export default LayoutCard;
