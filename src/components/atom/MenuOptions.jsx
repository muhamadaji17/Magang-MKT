/** @format */
import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import { SlOptionsVertical } from "react-icons/sl";
import { Link } from "react-router-dom";

const MenuOptions = ({ onEdit, onDelete, onDetail, isLast }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} className="">
      {/* Titik tiga */}
      <div
        onClick={() => setOpen(!open)}
        className={`p-2 hover:bg-gray-200 rounded-full relative w-10 h-10 flex justify-center items-center cursor-pointer mx-auto ${
          open ? "bg-gray-200" : ""
        }`}
      >
        <SlOptionsVertical />

        {/* Dropdown Menu */}
        {open && (
          <div
            className={`absolute ${
              isLast ? `bottom-2 -left-32` : "top-2 -left-32"
            } w-32 bg-white border border-gray-200 shadow-lg rounded-md z-50 `}
          >
            {onDetail && (
              <Link
                onClick={() => {
                  onDetail.onClick();
                }}
                to={onDetail.to}
                state={onDetail.state}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
              >
                Detail
              </Link>
            )}
            <Button
              onClick={() => {
                setOpen(false);
                onEdit?.();
              }}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
            >
              Edit
            </Button>
            <Button
              onClick={() => {
                setOpen(false);
                onDelete?.();
              }}
              className="block w-full text-left px-4 py-2 hover:bg-red-100 text-sm text-red-600"
            >
              Delete
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuOptions;
