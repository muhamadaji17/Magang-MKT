import React from "react";
import { Button } from "../atoms";

const TableBody = ({ data }) => {
  return (
    <tbody>
      {data.map((dataTable, index) => (
        <tr
          key={index}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
        >
          <td
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {index + 1}
          </td>
          <td
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {dataTable.nama_departement}
          </td>
          <td className="px-6 py-4">{dataTable.departement_code}</td>
          <td className="px-6 py-4">{dataTable.created_admin.username}</td>
          <td className="flex py-3 gap-2">
            <Button className={"px-3 py-2 bg-green-500 rounded-md text-white"}>
              Edit
            </Button>
            <Button className={"px-3 py-2 bg-red-600 rounded-md text-white"}>
              Delete
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
