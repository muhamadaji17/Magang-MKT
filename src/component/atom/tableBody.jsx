/* eslint-disable react/prop-types */
import { IconButton, Menu, MenuItem, MenuList, Paper } from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useGlobalHook, useZustand } from "../../hook";
import MoleculsModal from "../molecul/Modal";
import { PiPencilLineDuotone } from "react-icons/pi";
import { FaRegTrashAlt } from "react-icons/fa";

const TableBody = ({
  columns,
  inputDataEdit,
  handleSubmitEdit,

  inputDataDelete,
  handleSubmitDelete,
  currentData,
}) => {
  const {
    anchorEl,
    setAnchorEl,
    openModal,
    setOpenModal,
    openThreeDots,
    selectedInputData,
    setSelectedInputData,
    selectedSubmitData,
    setSelectedSubmitData,
  } = useGlobalHook();
  const { setDataModalTree } = useZustand();

  // Fungsi untuk menangani klik menu
  const handleMenuClick = (inputData, submitData) => {
    setSelectedInputData(inputData);
    setSelectedSubmitData(submitData);
    setOpenModal(true); // Buka modal
    setAnchorEl(null); // Tutup menu
  };

  return (
    <tbody>
      {currentData.map((body, indexBody) => {
        return (
          <tr
            key={indexBody}
            className={`${
              indexBody % 2 === 0 ? "bg-gray-50" : "bg-white"
            } hover:bg-gray-100`}
          >
            {columns.map((column, indexColumn) => {
              return (
                <td
                  className={`px-4 py-2  text-center ${
                    body[column.key] === false
                      ? "text-red-500"
                      : body[column.key] === true
                      ? "text-green-500"
                      : ""
                  }`}
                  key={indexColumn}
                >
                  {body[column.key].toString()}
                </td>
              );
            })}
            {inputDataEdit || inputDataDelete ? (
              <td>
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls={openThreeDots ? "long-menu" : undefined}
                  aria-expanded={openThreeDots ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={(event) => setAnchorEl(event.currentTarget)}
                >
                  <BsThreeDotsVertical
                    className=" text-black "
                    onClick={() => setDataModalTree(body)}
                  />
                </IconButton>
                <Menu
                  id="long-menu"
                  MenuListProps={{
                    "aria-labelledby": "long-button",
                  }}
                  elevation={0}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  anchorEl={anchorEl}
                  open={openThreeDots}
                  onClose={() => setAnchorEl(null)}
                >
                  <Paper sx={{ width: 200, maxWidth: "100%" }}>
                    <MenuList>
                      {inputDataEdit && (
                        <MenuItem
                          onClick={() =>
                            handleMenuClick(inputDataEdit, handleSubmitEdit)
                          }
                        >
                          <PiPencilLineDuotone
                            className="mr-5 text-slate-700 "
                            fontSize={20}
                          />
                          <p className="capitalize text-slate-700 ">Edit</p>
                        </MenuItem>
                      )}
                      {inputDataDelete && (
                        <MenuItem
                          onClick={() =>
                            handleMenuClick(inputDataDelete, handleSubmitDelete)
                          }
                        >
                          <FaRegTrashAlt
                            className="mr-5 text-red-500"
                            fontSize={20}
                          />
                          <p className="capitalize text-red-500 ">Delete</p>
                        </MenuItem>
                      )}
                    </MenuList>
                  </Paper>
                </Menu>
              </td>
            ) : null}
          </tr>
        );
      })}

      {/* Modal */}
      <MoleculsModal
        open={openModal}
        handleClose={() => setOpenModal(false)}
        inputData={selectedInputData} // Sesuai menu yang diklik
        submitData={selectedSubmitData} // Sesuai menu yang diklik
      />
    </tbody>
  );
};

export default TableBody;
