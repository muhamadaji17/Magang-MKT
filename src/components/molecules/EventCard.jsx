import React, { useState } from "react";

const EventCard = ({
  bannersOnThisDay,
  handleDragStart,
  handleDragEnd,
  isModalOpen,
  handleEditClick,
  handleDeleteClick,
  handleOnClick,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // State untuk menyimpan indeks yang di-hover

  return (
    <div className="grid grid-cols-1 gap-2 mt-1">
      {bannersOnThisDay.map((bannerItem, index) => (
        <div
          key={index}
          className={`relative text-sm text-black p-1 rounded-sm ${bannerItem.color} cursor-move hover:shadow-md transition-shadow duration-200`}
          draggable="true"
          onDragStart={(e) => handleDragStart(e, bannerItem)}
          onDragEnd={handleDragEnd}
          onMouseEnter={() => setHoveredIndex(index)} // Set indeks saat di-hover
          onMouseLeave={() => setHoveredIndex(null)} // Reset indeks saat tidak di-hover
          title={`${bannerItem.banner_name} - Klik dan tahan untuk memindahkan`}
          onClick={() => handleOnClick(bannerItem)}
        >
          {bannerItem.banner_name}

          {/* <ModalLayout isModalOpen={isModalOpen}>
            <h1>Hello</h1>
          </ModalLayout> */}

          {/* Dropdown */}
          {/* {hoveredIndex === index && (
            <div className="absolute top-5 -left-1 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <ul className="flex flex-col gap-2 ">
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleEditClick(bannerItem)}
                >
                  Edit
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleDeleteClick(bannerItem)}
                >
                  Delete
                </li>
              </ul>
            </div>
          )} */}
        </div>
      ))}
    </div>
  );
};

export default EventCard;
