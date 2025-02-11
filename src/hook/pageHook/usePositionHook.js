import { useEffect } from "react";
import { useAuthToken } from "../useAuthToken";
import { useGlobalHook } from "../useGlobalHook";
import { positionService } from "../../service";

export const usePositionHook = () => {
  const { datas, setDatas } = useGlobalHook([]);
  const { loading, setLoading } = useGlobalHook(false);
  const { updateData, setUpdateData } = useGlobalHook(false);
  const { showModal, setShowModal } = useGlobalHook(false);
  const { showModalWithId, setShowModalWithId } = useGlobalHook(false);
  const { searchQuery, setSearchQuery } = useGlobalHook("");
  const { getDataColumn, setGetDataColumn } = useGlobalHook({});
  const { typeModal, setTypeModal } = useGlobalHook("");
  const accessToken = useAuthToken();

  useEffect(() => {
    if (searchQuery === "") {
      positionService.get({
        accessToken,
        setDatas,
        setLoading,
        setUpdateData,
        setSearchQuery,
      });
    } else {
      const timeoutId = setTimeout(() => {
        positionService.search({
          accessToken,
          setDatas,
          searchQuery,
          setUpdateData,
        });
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [updateData, searchQuery]);

  return {
    datas,
    loading,
    showModal,
    setShowModal,
    showModalWithId,
    setShowModalWithId,
    searchQuery,
    setSearchQuery,
    getDataColumn,
    setGetDataColumn,
    typeModal,
    setTypeModal,
    setUpdateData,
  };
};
