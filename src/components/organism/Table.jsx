import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const Table = ({
  dataTable,
  label,
  handleOpenEditModal,
  deleteSubmit,
  className,
}) => {
  const imageURL = `${import.meta.env.VITE_IMAGE_URL}/image/films/`;

  return (
    <>
      <table className={`w-full text-sm bg-white shadow-md ${className}`}>
        <thead>
          <tr>
            <th className="p-2 bg-blue-800 text-slate-100">No</th>
            {label.map((label, index) => (
              <th key={index} className="p-2 bg-blue-800 text-slate-100">
                {label.name}
              </th>
            ))}
            <th className="p-2 bg-blue-800 text-slate-100">Action</th>
          </tr>
        </thead>
        <tbody>
          {dataTable.map((row, index) => (
            <tr className="text-center" key={index}>
              <td className="p-2 border-b-2">{index + 1}</td>
              {label.map((col) => (
                <td className="p-2 border-b-2 max-w-40" key={col.key}>
                  {col.key === "latitude" && row.latitude && row.longitude ? (
                    <div className="grid grid-cols-1 gap-2">
                      <p>{row.latitude}</p>
                      <p>{row.longitude}</p>
                    </div>
                  ) : col.key === "social_media" ? (
                    <div className="grid grid-cols-2 gap-2">
                      <p>YouTube: {row.yt}</p>
                      <p>Facebook: {row.fb}</p>
                      <p>Instagram: {row.ig}</p>
                      <p>X: {row.x}</p>
                    </div>
                  ) : col.key === "status" ? (
                    // String(row[col.key])
                    row[col.key] === true ? (
                      "Active"
                    ) : (
                      "Not Active"
                    )
                  ) : col.key === "poster_film" ? (
                    <div className="w-full flex justify-center items-center">
                      <img
                        className="w-20 h-32 object-cover"
                        src={imageURL + row.poster_film}
                        alt="preview"
                      />
                    </div>
                  ) : (
                    row[col.key]
                  )}
                </td>
              ))}
              <td className="p-2 border-b-2">
                <div className="flex items-center justify-center gap-4">
                  <div onClick={() => handleOpenEditModal(row)}>
                    <FaRegEdit
                      size={25}
                      className="text-blue-800 transition-all duration-300 cursor-pointer hover:text-blue-500"
                    />
                  </div>
                  <div onClick={() => deleteSubmit(row)}>
                    <RiDeleteBin6Line
                      className="text-red-600 cursor-pointer"
                      size={25}
                    />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
