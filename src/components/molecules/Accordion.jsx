import { useState, useRef, useEffect } from "react";
import Navlink from "./Navlink";

const Accordion = ({ submenus, config, currentPath, handleCloseSidebar }) => {
  const initialStatus = submenus.some((link) =>
    currentPath.startsWith(link.path)
  );
  const [active, setActive] = useState(initialStatus);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);

  useEffect(() => {
    if (active && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [active]);

  const handleToggle = () => {
    setActive((prev) => !prev);
  };

  useEffect(() => {
    setActive(submenus.some((link) => currentPath.startsWith(link.path)));
  }, [currentPath]);

  return (
    <li>
      {/* Header */}
      <div
        onClick={handleToggle}
        className="w-full hover:bg-blue-700 cursor-pointer text-white flex justify-between items-center p-2 rounded-md"
      >
        <div className="flex gap-2 items-center">
          {config.icon && <config.icon />}
          {config.text}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 transform transition-transform duration-300 ease-in-out ${
            active ? "" : "-rotate-90"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Submenu */}
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className={`overflow-hidden transition-all duration-500 ease-in-out`}
      >
        <Navlink
          links={submenus}
          handleCloseSidebar={handleCloseSidebar}
          currentPath={currentPath}
          className={`pl-4 space-y-2 mt-2 transition-opacity duration-300 ease-in-out ${
            active ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </li>
  );
};

export default Accordion;
