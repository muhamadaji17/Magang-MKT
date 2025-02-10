import { useEffect, useState } from "react";
import { apiGet } from "../api/apiCall";
import useAuthStore from "../store/useAuthStore";
import TableFlowbite from "../component/atom/TableFlowbite";
import { SearchTable, Button } from "../component";
import { formatDateTime } from "../utils/formatters";

const Division = () => {
  const { token } = useAuthStore();
  const [divisionData, setDivisionData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await apiGet(`/crud/unit`, token);
      console.log(response);
      setDivisionData(response.payload);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const label = [
    { name: "Departement Name", key: "created" },
    { name: "Unit Name", key: "nama_unit" },
    { name: "Unit Code", key: "unit_code" },
    { name: "Created At", key: "createdAt" },
    { name: "Action", key: "action" },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div className="flex justify-between items-center w-full pb-4">
        <SearchTable value={searchQuery} onChange={handleSearch} />
        <Button className="text-white text-sm px-4 py-2 bg-primary">
          Add Departement
        </Button>
      </div>
      <TableFlowbite label={label}>
        {divisionData.map((row, rowIndex) => (
          <tr className="bg-white border-b border-gray-200" key={rowIndex}>
            <td className="px-6 py-4">
              {row.id_departement_departement.nama_departement}
            </td>
            <td className="px-6 py-4">{row.nama_unit}</td>
            <td className="px-6 py-4">{row.unit_code}</td>
            <td className="px-6 py-4">
              <span title={row.createdAt}>{formatDateTime(row.createdAt)}</span>
            </td>
            <td className="px-6 py-4">
              <button className="text-red-500 hover:text-red-700">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </TableFlowbite>
    </>
  );
};

export default Division;
