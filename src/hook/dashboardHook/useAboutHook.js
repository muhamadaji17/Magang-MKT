import { useEffect } from "react";
import { useGlobalHook } from "../useGlobalHook";
import { getAboutService } from "../../service";
import { useData } from "../useData";

export const useAboutHook = () => {
  const {
    accessToken,
    setRefreshData,
    handleOpenModal,
    isModalOpen,
    handleCloseModal,
    submitType,
    refreshData,
    searchQuery,
    setSearchQuery,
    dataRow,
    isLoading,
    setIsLoading,
  } = useGlobalHook();
  const { datasAbout, setDatasAbout } = useData();

  const extraOptions = { accessToken, setRefreshData, handleCloseModal };

  useEffect(() => {
    Promise.all([
      getAboutService(accessToken, { setRefreshData, setDatasAbout }),
    ]).finally(() => setIsLoading(false));
  }, [refreshData]);

  return {
    datasAbout,
    isModalOpen,
    submitType,
    searchQuery,
    setSearchQuery,
    dataRow,
    extraOptions,
    handleOpenModal,
    isLoading,
    setIsLoading,
    handleCloseModal,
  };
};
