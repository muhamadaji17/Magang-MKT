import { Button } from "../atoms";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const TableBody = ({ dataTable, tableConfig, handleShowModal }) => {
  const formatDate = (data) => {
    const date = new Date(data);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formattedDay = day.toString().padStart(2, 0);
    const formattedMonth = month.toString().padStart(2, 0);
    return `${formattedDay}-${formattedMonth}-${year}`;
  };

  const handleClick = (data, typeModal) => {
    handleShowModal(data, typeModal);
  };

  return (
    <tbody className="">
      {dataTable?.map((data, index) => (
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
          {tableConfig?.map((row) => {
            return (
              <td
                key={row.key}
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {row.key === "createdAt" || row.key === "updatedAt"
                  ? formatDate(data[row.key])
                  : data[row.key]}
              </td>
            );
          })}
          <td className="flex justify-center py-3 gap-3">
            <Button
              className={"text-2xl"}
              onClick={() => handleClick(data, "edit")}
            >
              <FaRegEdit className="text-blue-600" />
            </Button>
            <Button
              className={"text-2xl"}
              onClick={() => handleClick(data, "delete")}
            >
              <RiDeleteBin6Line className="text-red-600" />
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
