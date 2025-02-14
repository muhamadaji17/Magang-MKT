import { RiDeleteBin5Line } from "react-icons/ri";
import { Button } from "../atoms";

const ConfirmDelete = ({ handleShowModal, dataName, handleSubmitData }) => {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center flex-col">
        <RiDeleteBin5Line className="text-4xl mb-3" />
        <span className="text-center">
          Yakin ingin menghapus{` "${dataName}"?`}
        </span>
      </div>

      <div className="flex justify-center gap-3 mt-5">
        <Button
          className={"shadow-lg bg-red-600 w-20 p-2 rounded-md text-white"}
          onClick={handleSubmitData}
        >
          Hapus
        </Button>
        <Button
          className={"shadow-lg w-20 border border-black p-2 rounded-md "}
          onClick={handleShowModal}
        >
          Batal
        </Button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
