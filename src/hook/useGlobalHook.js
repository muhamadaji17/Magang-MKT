import { useState } from "react";
import Cookies from "js-cookie";

export const useGlobalHook = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [refreshData, setRefreshData] = useState(true);
  const [submitType, setSubmitType] = useState(null);
  const [searchQuery, setSearchQuery] = useState({});
  const [dataRow, setDataRow] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const accessToken = Cookies.get("accessToken");

  const handleOpenModal = (type, dataDefault) => {
    if (dataDefault) {
      setDataRow(dataDefault);
    }

    setSubmitType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenSidebar = (type, dataDefault) => {
    if (dataDefault) {
      setDataRow(dataDefault);
    }

    setSubmitType(type);
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return {
    refreshData,
    setRefreshData,
    accessToken,
    isModalOpen,
    submitType,
    searchQuery,
    setSearchQuery,
    setSubmitType,
    handleCloseModal,
    handleOpenModal,
    handleOpenSidebar,
    handleCloseSidebar,
    isLoading,
    setIsLoading,
    dataRow,
    setDataRow,
    stateShowModal: {
      isShow: isModalOpen,
      handleShow: isModalOpen ? handleCloseModal : handleOpenModal,
    },
    stateShowSidebar: {
      isShow: isSidebarOpen,
      handleShow: isSidebarOpen ? handleCloseSidebar : handleOpenSidebar,
    },
  };
};
