/** @format */

import { Link, useLocation } from "react-router-dom";
import { navLink } from "../../pattern";
import Navlink from "./Navlink";
import Form from "./Form";
import { Button } from "../atom";
import { logoutService } from "../../service";

const Sidebar = ({
  type = "",
  inputForm,
  title,
  slide,
  position,
  submitType,
  handleService,
  handleShow,
  className,
  handleOpenModal,
  dataDefault,
  isShow = true,
}) => {
  const currentPath = useLocation().pathname;
  return (
    <>
      <div
        className={`${slide ? "fixed md:flex " : ""} flex ${
          isShow && slide ? "inset-0" : ""
        }`}
      >
        {isShow && slide && (
          <div
            className="flex-1 bg-black/60 h-screen absolute inset-0 "
            onClick={handleShow}
          />
        )}

        <div
          className={`${
            slide
              ? `fixed w-96 z-40 ${type !== "form" ? "pt-20" : ""}`
              : "static w-72"
          } ${
            type === "form"
              ? "bg-white px-6"
              : "bg-blue-950 text-white md:translate-x-0"
          }  ${
            isShow
              ? "translate-x-0 "
              : `${
                  position.includes("right")
                    ? "translate-x-full"
                    : "-translate-x-full"
                }`
          } ${
            className || ""
          } inset-y-0 ${position} flex-1 p-4 transform transition-transform duration-300 shadow-xl`}
        >
          <div
            className={`flex flex-col h-full  ${
              type !== "form" ? "justify-between" : ""
            }`}
          >
            {type === "form" ? (
              <>
                <h3 className="text-gray-500 font-semibold mb-6">{title}</h3>
                <Form
                  configInput={inputForm}
                  handleSubmitData={handleService}
                  forType={"sidebar"}
                  dataDefault={dataDefault}
                  type={submitType}
                  handleOpenModal={handleOpenModal}
                  handleShowSidebar={handleShow}
                />
              </>
            ) : (
              <Navlink
                links={navLink}
                currentPath={currentPath}
                handleCloseSidebar={handleShow}
              />
            )}

            {type !== "form" && (
              <Link className="lg:hidden" to={"/login"}>
                <Button
                  className={"hover:underline "}
                  onClick={() => logoutService()}
                >
                  Logout
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
