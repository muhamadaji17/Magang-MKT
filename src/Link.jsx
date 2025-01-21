import React from "react";
import { NavLink } from "react-router";

const Link = ({ children, path }) => {
  return (
    <NavLink
      to={path}
      className="text-pink-500 text-[12px] inline-block hover:underline"
    >
      {children}
    </NavLink>
  );
};

export default Link;
