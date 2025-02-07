import React from "react";

import { Link, useLocation } from "react-router";

const NavLink = ({ linkPatten }) => {
  const { pathname } = useLocation();

  return (
    <ul>
      {linkPatten.map((link, index) => (
        <li
          className={` hover:bg-blue-500 hover:text-white text-sm rounded-md cursor-pointer text-slate-700 my-3 ${
            pathname === link.destinationPath ? "bg-blue-500 text-white" : ""
          }`}
          key={index}
        >
          <Link
            to={link.destinationPath}
            className={link.icon ? "flex gap-2 p-2 items-center" : ""}
          >
            <link.icon />
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLink;
