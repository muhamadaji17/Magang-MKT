import { Table } from "../index";

import { labelDepartement } from "../../utils/label";

import { FaTrashCan } from "react-icons/fa6";
import { TbEdit } from "react-icons/tb";
const TableData = ({
  handleEditClick,
  handleDeleteClick,
  dataTable,
  label,
}) => {
  return (
    <Table label={label}>
      {dataTable?.length > 0 ? (
        dataTable.map((row, rowIndex) => (
          <tr className="bg-white border-b border-gray-200" key={rowIndex}>
            <td className="px-6 py-4">{rowIndex + 1}</td>
            {label.map((col) => {
              return <td className="px-6 py-4">{row[col.key]}</td>;
            })}
            <td className="px-6 py-4 space-x-4 flex items-center">
              <button
                className="text-green-500 hover:text-green-700"
                onClick={() => handleEditClick(row)}
              >
                <TbEdit size={20} />
              </button>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDeleteClick(row)}
              >
                <FaTrashCan size={20} />
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={6} className="text-center py-4">
            No data available
          </td>
        </tr>
      )}
    </Table>
  );
};

export default TableData;
