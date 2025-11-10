/** @format */

import { useLocation } from "react-router-dom";
import { Button } from "../atom";
import Breadcrumb from "./Breadcrumb";

const HeaderContent = ({ title, handleOpen, handleAPI }) => {
  const { pathname } = useLocation();

  return (
    <div className="">
      <div className="flex justify-between mb-10">
        <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
        <Breadcrumb />
      </div>

      {pathname !== "/" && (
        <div className="flex justify-end mb-10">
          <Button
            onClick={() => {
              handleOpen("add");
              if (handleAPI) {
                handleAPI();
              }
            }}
            className={"bg-blue-500 text-white px-3 py-1 rounded-sm"}
          >
            Add {title}
          </Button>
        </div>
      )}
    </div>
  );
};

export default HeaderContent;
