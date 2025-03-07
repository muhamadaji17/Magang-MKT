/* eslint-disable react/prop-types */
const DataInfomations = ({ dataLabel, dataValueLabel }) => {
  return (
    <>
      <div className="my-5 border-b-2 ">
        <div className="mx-auto text-center ">
          <img
            src="/images/logo/sams-logo.png"
            width={150}
            alt=""
            className="mx-auto "
          />
          <p className="mt-5 font-bold text-xl">System Admin</p>
        </div>
        <p className="my-3 font-semibold text-lg">Details</p>
      </div>
      {dataLabel.map((label, index) => (
        <div className="flex " key={index}>
          <p className="w-52 font-semibold">{label.name} </p>
          <p className="w-3">:</p>
          <p>{dataValueLabel[label.key]}</p>
        </div>
      ))}
    </>
  );
};

export default DataInfomations;
