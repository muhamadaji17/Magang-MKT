/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

// export default Breadscrums;

import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import Breadscrum from "../molecul/Breadscrum";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { StyleModalBiasa } from "../../utils/modals/Style";
import { Button } from "../atom";
import MoleculsModal from "../molecul/Modal";
import { useGlobalHook } from "../../hook";

const Header = ({ pageName, inputDataModalAdd, handleSubmitDataModalAdd }) => {
  const pathname = useLocation();
  const { openModal, setOpenModal } = useGlobalHook();

  const router = pathname.pathname;
  const routenya = router;
  const pathArray = routenya.split("/").filter((item) => item !== ""); // Mengubah rute menjadi array dan menghapus elemen kosong
  let lastThreePaths;

  if (pathArray[pathArray.length - 1].startsWith("[")) {
    const queryParam = pathname;
    lastThreePaths = [...pathArray.slice(0, -1), queryParam];
  } else {
    // console.log(pathArray.slice(1));
    lastThreePaths = pathArray.slice(1);
    // lastThreePaths = pathArray.slice(-3);
  }

  const pathObjects = lastThreePaths.map((route, index) => {
    const path = `/${lastThreePaths.slice(0, index + 1).join("/")}`; // Mendapatkan jalur berdasarkan rute

    return {
      route,
      path,
    };
  });

  return (
    <div className="mb-2 ">
      <div className="mb-4 block sm:flex gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white mb-2 ">
          {pageName}
        </h2>
        <Breadscrum pathObjects={pathObjects} />
      </div>
      {inputDataModalAdd && handleSubmitDataModalAdd && (
        <div>
          <div
            onClick={() => setOpenModal((prev) => !prev)}
            className={
              "ml-2 bg flex items-center gap-2 cursor-pointer w-fit hover:underline"
            }
          >
            <FaPlus />
            Tambah Data
          </div>
          <MoleculsModal
            open={openModal}
            setOpen={setOpenModal}
            handleClose={() => setOpenModal((prev) => !prev)}
            inputData={inputDataModalAdd}
            submitData={handleSubmitDataModalAdd}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
