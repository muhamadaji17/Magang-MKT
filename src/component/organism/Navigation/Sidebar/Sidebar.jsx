/* eslint-disable react/prop-types */
// import { useState } from "react";

// const SidebarLinkGroup = ({ children, activeCondition }) => {
//   const [open, setOpen] = useState(activeCondition);

//   const handleClick = () => {
//     setOpen(!open);
//   };

//   return <li>{children(handleClick, open)}</li>;
// };

// export default SidebarLinkGroup;

const SidebarLinkGroup = ({
  children,
  activeSubMenu,
  setActiveSubMenu,
  menuKey,
}) => {
  const isOpen = activeSubMenu === menuKey; // Periksa apakah submenu ini yang sedang dibuka

  const handleClick = () => {
    setActiveSubMenu(isOpen ? null : menuKey); // Jika sedang dibuka, tutup; jika belum, buka
  };

  return <li>{children(handleClick, isOpen)}</li>;
};

export default SidebarLinkGroup;
