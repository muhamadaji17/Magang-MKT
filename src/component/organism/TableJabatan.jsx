import { Table } from "../index";

import { labelJabatan } from "../../utils/label";
import { formatDateTime } from "../../utils/formatters";

import { FaTrashCan } from "react-icons/fa6";
import { TbEdit } from "react-icons/tb";
const TableJabatan = ({
  handleEditClick,
  handleDeleteClick,
  dataDepartement,
}) => {
  return (
    <Table label={labelJabatan}>
      {dataDepartement?.length > 0 ? (
        dataDepartement.map((row, rowIndex) => (
          <tr className="bg-white border-b border-gray-200" key={rowIndex}>
            <td className="px-6 py-4">{rowIndex + 1}</td>
            <td className="px-6 py-4">{row.created_admin.username}</td>
            <td className="px-6 py-4">{row.nama_jabatan}</td>
            <td className="px-6 py-4">{row.jabatan_code}</td>
            <td className="px-6 py-4">{formatDateTime(row.createdAt)}</td>
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

export default TableJabatan;
