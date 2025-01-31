import React from "react";

import { Link } from "react-router";

const NavLink = ({ datas }) => {
  return (
    <ul>
      {datas.map((data, index) => (
        <li
          className={`${data.className} ${
            data.isActive ? "bg-blue-500 text-white" : ""
          }`}
          key={index}
        >
          <Link
            to={data.destinationPath}
            className={data.icon ? "flex gap-2 p-2 items-center" : ""}
          >
            <data.icon />
            {data.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLink;
