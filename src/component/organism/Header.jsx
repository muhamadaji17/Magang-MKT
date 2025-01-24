/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

// export default Breadscrums;

import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import Breadscrum from "../molecul/Breadscrum";
import { FaPlus } from "react-icons/fa";

const Header = ({
  pageName,
  url,
  handleSearchData,
  dataSearch,
  infoUrl,
  // control,
  valueOptions,
  getDataAbsensi,
}) => {
  const { register, handleSubmit, control } = useForm();

  const pathname = useLocation();

  const router = pathname.pathname;
  const routenya = router;
  const pathArray = routenya.split("/").filter((item) => item !== ""); // Mengubah rute menjadi array dan menghapus elemen kosong
  let lastThreePaths;
  if (pathArray[pathArray.length - 1].startsWith("[")) {
    const queryParam = pathname;
    lastThreePaths = [...pathArray.slice(0, -1), queryParam];
  } else {
    lastThreePaths = pathArray.slice(-3);
  }

  const pathObjects = lastThreePaths.map((route, index) => {
    const path = `/${lastThreePaths.slice(0, index + 1).join("/")}`; // Mendapatkan jalur berdasarkan rute

    return {
      route,
      path,
    };
  });

  //   const { getDataReportDetail } = storeReport();
  const token = sessionStorage.getItem("token");

  //   const handleChangeUser = (e) => {
  //     // console.log(e.target.value);
  //     const user_id = e.target.value;
  //     // getDataReportDetail(token, user_id);
  //   };

  return (
    <div className="mb-2 ">
      <div className="mb-4 block sm:flex gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white mb-2">
          {pageName}
        </h2>
        <Breadscrum pathObjects={pathObjects} />
      </div>
      <div
        // className={`items-center   ${
        //   url ? "grid md:grid-cols-2 w-full " : "w-1/2 ml-auto"
        // } `}
        className={`items-center ${
          url || valueOptions ? "grid md:grid-cols-2 w-full" : "w-1/2 ml-auto"
        }`}
      >
        {/* <div className="grid grid-cols-2 items-center w-full "> */}
        {url ? (
          <Link
            href={url ? url : ""}
            // target={infoUrl ? "_blank" : ""}
            className="flex flex-wrap items-center  hover:underline hover:text-primary text-black  rounded-md max-w-[14rem] h-8 dark:text-white "
          >
            <FaPlus className="mr-1" />
            <h1 className="">Tambah Data </h1>
          </Link>
        ) : null}

        {/* <Link
          href={url ? url : ""}
          // target={infoUrl ? "_blank" : ""}
          className="flex flex-wrap items-center  hover:underline hover:text-primary text-black  rounded-md max-w-[14rem] h-8 dark:text-white "
        >
          <FaPlus className="mr-1" />
          <h1 className="">Tambah Data </h1>
        </Link> */}

        {valueOptions ? (
          <div className="">
            {/* <SelectedFormOutRegister
              title={"Pilih User"}
              valueOptions={valueOptions} //values gender
              onChange={handleChangeUser}
              selectTitle={"Pilih User"}
              name={"user_id"}
            /> */}

            {/* <MoleculsAutocompleteOutRegis
              name={"user_id"}
              label={"Pilih User"}
              control={control}
              defaultValue={null}
              options={valueOptions}
              onChange={handleChangeUser} // Handle perubahan
              // onChange={(_, value) => console.log(value)} // Handle perubahan
            /> */}
          </div>
        ) : null}

        {/* {dataSearch && (
          <div className="">
            <TemplateSearch
              register={register}
              handleSubmit={handleSubmit}
              control={control}
              handleSearchData={handleSearchData}
              dataSearch={dataSearch}
            />
          </div>
        )} */}
      </div>
      {/* {infoUrl ? (
        <Link
          href={infoUrl}
          target="_blank"
          className="flex items-center  hover:underline hover:text-primary text-black  rounded-md    dark:text-white "
        >
          <FaInfoCircle />
          <small className="ml-2">SOP Perjalanan Dinas</small>
        </Link>
      ) : (
        ""
      )} */}
    </div>
  );
};

export default Header;
