import { Button } from "../index";

const TableBody = ({ limitedData, handleEditClick }) => {
  return (
    <>
      <tbody>
        {limitedData.map((data, index) => (
          <tr key={index} className="border-2">
            <td className="text-start px-4 py-2">
              {data.created_admin.username}
            </td>
            <td className="text-start px-4 py-2">{data.departement_code}</td>
            <td className="text-start px-4 py-2">{data.nama_departement}</td>
            <td className="text-start px-4 py-2">
              {new Date(data.created_admin.createdAt).toLocaleDateString("id")}
            </td>
            <td className="space-x-2 px-4 py-2">
              <Button
                onClick={() => handleEditClick(data)} // Pass data yang ingin diedit
                className="text-white text-sm px-4 py-2 bg-success"
              >
                Edit
              </Button>
              <Button className="text-white bg-red-600 text-sm px-4 py-2">
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default TableBody;
