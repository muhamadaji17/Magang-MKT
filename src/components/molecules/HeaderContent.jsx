/** @format */

import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../atom";
import Breadcrumb from "./Breadcrumb";

const HeaderContent = ({
  title,
  handleOpen,
  handleAPI,
  path,
  hiddenButton,
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="">
      <div className="flex justify-between mb-10">
        <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
        <Breadcrumb />
      </div>

      {pathname !== "/" && (
        <div className="flex justify-end mb-10">
          {!hiddenButton && (
            <Button
              onClick={() => {
                if (handleAPI) {
                  handleAPI();
                }

                if (path) {
                  navigate(path);
                } else {
                  handleOpen("add");
                }
              }}
              className={"bg-blue-500 text-white px-3 py-1 rounded-sm"}
            >
              Add {title}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default HeaderContent;
