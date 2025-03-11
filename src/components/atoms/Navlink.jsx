import { AccordionList, NavList } from "@/pattern/NavList";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const Navlink = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const location = useLocation();

  const handleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  return (
    <>
      <h1 className="px-3 text-3xl font-bold text-white">Brand</h1>
      <ul className="space-y-2 font-medium">
        {NavList.map((nav, index) => (
          <li key={index}>
            <Link
              to={nav.path}
              className={`flex items-center p-2  rounded-lg text-white hover:bg-blue-600 group ${
                location.pathname === nav.path ? "bg-blue-600" : ""
              }`}
            >
              <nav.icon size={25} />
              <span className="ms-3">{nav.name}</span>
            </Link>
          </li>
        ))}
        {AccordionList.map((acc, index) => (
          <li key={index}>
            <div
              onClick={() => handleAccordion(index)}
              className="flex items-center justify-between p-2 text-white rounded-lg cursor-pointer hover:bg-blue-600 group"
            >
              <div className="flex items-center">
                <acc.icon size={25} />
                <span className="ms-3">{acc.name}</span>
              </div>
              <IoIosArrowDown
                size={25}
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-0" : "-rotate-90"
                }`}
              />
            </div>
            {openIndex === index && (
              <ul className="pl-8 mt-2 space-y-1">
                {acc.children.map((child, childIndex) => (
                  <li key={childIndex}>
                    <Link
                      to={child.path}
                      className={`flex items-center p-2 rounded-lg text-white hover:bg-blue-600 ${
                        location.pathname === child.path ? "bg-blue-600" : ""
                      }`}
                    >
                      <child.icon size={20} />
                      <span className="ms-3">{child.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navlink;
