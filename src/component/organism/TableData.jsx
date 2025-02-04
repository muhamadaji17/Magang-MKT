import { useEffect, useState } from "react";
import { apiGet } from "../../api/apiCall";
import useAuthStore from "../../store/useAuthStore";
import { Button } from "../index";

const TableData = () => {
  const [data, setData] = useState([]);

  const { token } = useAuthStore();

  const response = async () => {
    const result = await apiGet("/crud/departement", token);
    setData(result.payload);
  };

  useEffect(() => {
    response();
  }, []);

  const label = [
    { name: "Username" },
    { name: "ID Departement" },
    { name: "Departement" },
    { name: "Created At" },
    { name: "Action" },
  ];

  const limitedData = data.slice(0, 10);

  return (
    <>
      <table className="table-fixed border-2 w-full">
        <thead>
          <tr className="text-center bg-primary text-white">
            {label.map((label, index) => (
              <th key={index} className="text-start font-semibold py-2 px-4">
                {label.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {limitedData.map((data, index) => (
            <tr key={index} className="border-2">
              <td className="text-start px-4 py-2">
                {data.created_admin.username}
              </td>
              <td className="text-start px-4 py-2">{data.departement_code}</td>
              <td className="text-start px-4 py-2">{data.nama_departement}</td>
              <td className="text-start px-4 py-2">
                {new Date(data.created_admin.createdAt).toLocaleDateString(
                  "id"
                )}
              </td>
              <td className=" space-x-2 px-4 py-2">
                <Button className="text-white text-sm px-4 py-2">Edit</Button>
                <Button className="text-white bg-red-600 text-sm px-4 py-2">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableData;
