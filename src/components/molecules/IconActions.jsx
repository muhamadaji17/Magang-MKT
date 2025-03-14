import { FaPenToSquare } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";

const IconActions = ({ editClick, deleteClick }) => {
  return (
    <>
      <div className="flex gap-2 items-center justify-center">
        <FaPenToSquare
          size={23}
          onClick={editClick}
          className="cursor-pointer hover:text-blue-700"
        />
        <MdDeleteForever
          className="text-red-500 hover:text-red-700 cursor-pointer"
          size={32}
          onClick={deleteClick}
        />
      </div>
    </>
  );
};

export default IconActions;
