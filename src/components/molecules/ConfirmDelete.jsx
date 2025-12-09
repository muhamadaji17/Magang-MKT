import { RiDeleteBinLine } from "react-icons/ri";
import { Button, LoadingButton } from "../atom";
import { useGlobalHook } from "../../hook/useGlobalHook";

const ConfirmDelete = ({ handleCloseModal, onConfirm, dataRow }) => {
  const { loadingButton, setLoadingButton } = useGlobalHook();

  return (
    <>
      <div className="flex justify-center">
        <div className="bg-white p-4 flex flex-col items-center">
          <RiDeleteBinLine className="text-red-600 text-5xl text-center" />
          <p className="text-gray-700 mt-2">
            Are you sure you want to delete ?
          </p>
          <div className="flex justify-center mt-4 space-x-5">
            <Button
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
              onClick={handleCloseModal}
            >
              Cancel
            </Button>
            <Button
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              onClick={() => {
                onConfirm(dataRow, { type: "delete" });
                setLoadingButton(true);
              }}
            >
              {loadingButton ? <LoadingButton /> : "Delete"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmDelete;
