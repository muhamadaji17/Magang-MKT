/** @format */

import { formatDate } from "date-fns";
import { Button, Loading, MenuOptions } from "../atom";
import { Link } from "react-router-dom";

const TableBody = ({
  datasTable,
  configTable,
  tableType,
  handleShowModal,
  handleShowSidebar,
  isLoading,
  handleAPI,
  pathDetail,
}) => {
  return (
    <tbody>
      {isLoading ? (
        <tr className="bg-white border border-gray-300">
          <td colSpan={12}>
            <Loading />
          </td>
        </tr>
      ) : datasTable.length > 0 ? (
        datasTable?.map((data, index) => (
          <tr
            key={index}
            className="text-center bg-white border border-gray-300"
          >
            <td scope="row" className="px-6 py-4 font-medium text-gray-900">
              {index + 1}
            </td>
            {configTable?.map((col) => (
              <td
                key={col.key}
                scope="row"
                className={`${
                  col.key.includes("poster") ? "min-w-32" : ""
                }  px-6 py-4 font-medium text-gray-900 text-nowrap`}
              >
                {col.key === "createdAt" || col.key === "updatedAt" ? (
                  formatDate(data[col.key])
                ) : col.key === "status" ? (
                  data[col.key] ? (
                    <p className="text-green-500">Active</p>
                  ) : (
                    <p className="text-red-500">Inactive</p>
                  )
                ) : col.key.includes("poster") || col.key.includes("logo") ? (
                  <div
                    className="w-full flex justify-center"
                    onClick={() => handleShowModal("image", data)}
                  >
                    <img
                      className="w-20 h-28 "
                      src={`http://${data[col.key]}`}
                    />
                  </div>
                ) : col.key === "trailer_film" || col.key === "contact_url" ? (
                  <Link
                    to={data[col.key]}
                    target="_blank"
                    className=" bg-blue-500 px-3 py-2 text-white rounded-md hover:bg-blue-600"
                  >
                    {/* {data[col.key]} */}
                    Preview
                  </Link>
                ) : col.key === "sinopsis_film_id" ? (
                  // <div className="max-w-96">
                  // <ShortenedCharacter
                  //   maxLength={50}
                  //   sinopsis={data[col.key]}
                  //   handleShow={() => handleShowModal("synopsis", data)}
                  // />

                  <Button
                    onClick={() => handleShowModal("synopsis", data)}
                    className={"bg-blue-500 text-white p-2 rounded-md"}
                  >
                    Preview Synopsis
                  </Button>
                ) : // </div>

                Array.isArray(col.key) ? (
                  col.key.reduce((acc, curr) => acc[curr], data)
                ) : (
                  data[col.key]
                )}
              </td>
            ))}
            <td className="">
              <MenuOptions
                isLast={datasTable.length - 1 === index}
                onEdit={() => {
                  handleShowModal("edit", data);
                  if (handleAPI) {
                    handleAPI();
                  }
                }}
                onDelete={() => handleShowModal("delete", data)}
                onDetail={
                  pathDetail
                    ? {
                        onClick: () => sessionStorage.setItem("id", data.id),
                        to: `${pathDetail}${data.nama_film}`,
                        data: data,
                      }
                    : null
                }
              />

              {/* <div className="flex justify-center p-4 gap-3">
                {pathname === "/office" && (
                  <Button
                    className={"text-2xl text-violet-600"}
                    onClick={() => handleShowModal("location", data)}
                  >
                    <FaEye />
                  </Button>
                )}

                <Button
                  className={"text-2xl"}
                  onClick={() => {
                    // if (tableType !== "films") {
                    handleShowModal("edit", data);
                    if (handleAPI) {
                      handleAPI();
                    }
                    // } else {
                    //   handleShowSidebar("edit", data);
                    // }
                  }}
                >
                  <FaRegEdit className="text-blue-600" />
                </Button>
                <Button
                  className={"text-2xl"}
                  onClick={() => {
                    handleShowModal("delete", data);
                  }}
                >
                  <RiDeleteBin6Line className="text-red-600" />
                </Button>
                <Link
                  className={"text-2xl"}
                  onClick={() => sessionStorage.setItem("id", data.id)}
                  to={`/films/detail?nama=${data.nama_film}`}
                  state={data}
                >
                  <FaExternalLinkAlt className="text-green-600" />
                </Link>
              </div> */}
            </td>
          </tr>
        ))
      ) : (
        <tr className="text-center bg-white border border-gray-300 h-96">
          <td colSpan={configTable.length + 2}>No data found</td>
        </tr>
      )}
    </tbody>
  );
};

export default TableBody;
