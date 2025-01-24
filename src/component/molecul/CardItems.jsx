/* eslint-disable react/prop-types */

import { FaEye, SiLevelsdotfyi } from "../../utils/icons";

// const CardItems = ({ data }) => {
const CardItems = ({ icon, total, title, index }) => {
  return (
    <>
      {/* {data.map((item, index) => ( */}
      <>
        <div className="bg-gray-300 p-3 rounded-full w-fit " key={index}>
          {icon === "FaEye" ? (
            <FaEye fontSize={24} color="skyblue" />
          ) : icon === "SiLevelsdotfyi" ? (
            <SiLevelsdotfyi fontSize={24} color="skyblue" />
          ) : null}
          {/* {index === 0 ? (
              <FaEye fontSize={24} color="" className="text-sky-600" />
            ) : null} */}
        </div>
        <div>
          <p className="font-bold text-2xl mt-3">{total}</p>
          <p className="font-light text-sm">{title}</p>
        </div>
      </>
      {/* ))} */}
    </>
  );
};

export default CardItems;
