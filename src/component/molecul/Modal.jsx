/* eslint-disable react/prop-types */
import { Box, Modal } from "@mui/material";
import { StyleModalBiasa } from "../../utils/modals/Style";
import { FormInputan } from "../organism";

const MoleculsModal = ({
  open,

  inputData,
  submitData,
  namaButton2,
  handleClose,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={StyleModalBiasa}>
        <FormInputan
          dataForm={inputData}
          handleSubmitData={submitData}
          namaButton1={"Simpan"}
          namaButton2={namaButton2}
        />
      </Box>
    </Modal>
  );
};

export default MoleculsModal;
