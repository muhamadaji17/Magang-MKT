import { useEffect, useState } from "react";
import { apiGet } from "../../api/apiGet";
import useAuthStore from "../../store/useAuthStore";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const navigate = useNavigate();
  const { token } = useAuthStore();
  const [data, setData] = useState([]);

  useEffect(() => {
    response();
    if (!token) {
      navigate("/auth/login");
    }
  }, [token, navigate]);

  const response = async () => {
    const result = await apiGet("/crud/departement", token);
    setData(result.payload);
    console.log(result.payload);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <table className="table-fixed border-2 w-full ">
        <thead>
          <tr>
            <th className="text-start border-b-2 py-2 px-4">Username</th>
            <th className="text-start border-b-2 py-2 px-4">ID Departement</th>
            <th className="text-start border-b-2 py-2 px-4">Departement</th>
            <th className="text-start border-b-2 py-2 px-4">Created</th>
            <th className="text-start border-b-2 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr key={index}>
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
              <td>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-sm text-gray-600">
        Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, totalItems)}{" "}
        of {totalItems} data
      </p>
    </>
  );
};

export default Table;
