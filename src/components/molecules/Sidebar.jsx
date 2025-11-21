/** @format */

import { Link, useLocation } from "react-router-dom";
import { navLink } from "../../pattern";
import Navlink from "./Navlink";
import Form from "./Form";
import { Button } from "../atom";
import { MdClose } from "react-icons/md";
import Logo from "../../../public/images/logo/LOGO RAIN WHITE.svg";

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
        className={`${slide ? "fixed md:flex " : ""} flex z-10 ${
          isShow && slide ? "inset-0" : ""
        }`}
      >
        {isShow && slide && (
          <div
            className="flex-1 bg-black/60 h-screen inset-0"
            onClick={handleShow}
          />
        )}

        <div
          className={`${
            // slide
            //   ? `fixed w-96 ${type !== "form" ? "pt-20 " : ""}`
            //   : "static w-72"

            slide ? `fixed w-72` : "static w-72"
          } ${
            type === "form"
              ? "bg-white px-6 w-96"
              : "bg-blue-950 text-white xl:translate-x-0"
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
          } inset-y-0 ${position} flex-1 p-4 transform transition-transform duration-300 overflow-y-auto overflow-x-hidden h-screen shadow-xl`}
        >
          {type !== "form" && (
            <div className="px-2 mb-8 flex  justify-between">
              <Link className="text-2xl">
                <img src={Logo} alt="logo-rain" className="w-30 lg:w-40" />
              </Link>

              <Button
                className={"xl:hidden absolute top-4 right-4 text-2xl"}
                onClick={handleShow}
              >
                <MdClose />
              </Button>
            </div>
          )}

          <div
            className={`flex flex-col ${
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
            {/* {type !== "form" && (
              <Link className="lg:hidden" to={"/login"}>
                <Button
                  className={"hover:underline "}
                  onClick={() => logoutService()}
                >
                  Logout
                </Button>
              </Link>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
