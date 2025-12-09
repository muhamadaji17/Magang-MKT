import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { Button } from "../atom";
import { MdOutlineClose, MdOutlineCheck } from "react-icons/md";

const Card = ({
  img,
  title,
  content,
  status,
  extraInfo,
  handleDelete,
  handleUpdateStatus,
  handleUpdate,
}) => {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Thumbnail */}
      <div className="overflow-hidden">
        <img
          src={img}
          alt={"thumbnail"}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 justify-between">
        <div className="p-4 space-y-2 ">
          <h4 className="text-lg font-semibold line-clamp-2 text-gray-800 group-hover:text-blue-800">
            {title}
          </h4>

          <div
            dangerouslySetInnerHTML={{ __html: content }}
            className="line-clamp-3"
          />

          {extraInfo && (
            <div className="pt-2 flex items-center justify-between text-xs text-gray-400">
              {extraInfo.map((info) => (
                <span key={info}>{info}</span>
              ))}
            </div>
          )}
        </div>

        {/* Footer (icon section) */}
        <div className="flex items-center justify-between text-xs text-gray-600 border-t border-gray-300 py-2 px-4">
          <div className="text-lg space-x-3 flex items-center">
            <Button
              onClick={handleUpdate}
              className={"hover:text-blue-500 inline-block"}
            >
              <FaRegEdit />
            </Button>
            <Button
              onClick={handleUpdateStatus}
              className={`text-xl ${
                status ? "hover:text-red-500" : "hover:text-green-500"
              }`}
            >
              {status ? <MdOutlineClose /> : <MdOutlineCheck />}
            </Button>
            <Button className={"hover:text-red-500"} onClick={handleDelete}>
              <FaRegTrashAlt />
            </Button>
          </div>

          <span className={`${status ? "text-green-500" : "text-red-500"}`}>
            {status ? "Active" : "Inactive"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
