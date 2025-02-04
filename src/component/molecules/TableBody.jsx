import React from "react";
import { Button } from "../atoms";
import { handleShowModal } from "../../pattern/HandleButton";
import { useGlobalHook } from "../../hook";

const TableBody = ({
  data,
  setShowModal,
  setValueTable,
  setDataId,
  setShowConfirmDelete,
}) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  return (
    <tbody className="">
      {data.map((dataTable, index) => (
        <tr
          key={index}
          className="text-center bg-white border-b border-gray-200"
        >
          <td
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
          >
            {index + 1}
          </td>
          <td
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
          >
            {dataTable.nama_departement}
          </td>
          <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            {dataTable.departement_code}
          </td>
          <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            {dataTable.created_admin.username}
          </td>
          <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            {formatDate(dataTable.createdAt)}
          </td>
          <td className="flex justify-center py-3 gap-2">
            <Button
              className={"px-3 py-2 bg-green-500 rounded-md text-white"}
              onClick={() => {
                handleShowModal(true, setShowModal);
                setValueTable(data[index]);
                setDataId(dataTable.id);
              }}
            >
              Edit
            </Button>
            <Button
              className={"px-3 py-2 bg-red-600 rounded-md text-white"}
              onClick={() => {
                handleShowModal(true, setShowConfirmDelete);
                setDataId(dataTable.id);
              }}
            >
              Delete
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
