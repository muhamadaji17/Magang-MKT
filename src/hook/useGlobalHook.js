import { useState } from "react";
import { create } from "zustand";
import { DataUSer } from "../utils/data/dataUser";

export const useGlobalHook = () => {
  const [loadingButton, setLoadingButton] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [anchorEl, setAnchorEl] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [selectedInputData, setSelectedInputData] = useState(null);
  const [selectedSubmitData, setSelectedSubmitData] = useState(null);
  const [page, setPage] = useState(1); // Halaman pertama
  const [rowsPerPage, setRowsPerPage] = useState(10); // Rows per page
  const openThreeDots = Boolean(anchorEl);

  return {
    loadingButton,
    setLoadingButton,
    showPassword,
    setShowPassword,
    openModal,
    setOpenModal,
    openModal2,
    setOpenModal2,
    openModal3,
    setOpenModal3,
    openThreeDots,
    anchorEl,
    setAnchorEl,
    selectedInputData,
    setSelectedInputData,
    selectedSubmitData,
    setSelectedSubmitData,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
  };
};

export const useZustand = create((set) => {
  return {
    status: null,
    message: null,
    dataModalTree: [],
    dataUser: DataUSer,
    setDataModalTree: (newDataModalTree) => {
      set({ dataModalTree: newDataModalTree });
    },
    setDataUser: (newDataUser) => {
      set({ DataUser: newDataUser });
    },
  };
});
