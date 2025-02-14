import { useEffect } from "react";
import { useAuthToken } from "../useAuth";
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
    if (Object.keys(searchQuery).length === 0) {
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
    accessToken,
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
