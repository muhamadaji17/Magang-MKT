import { useEffect } from "react";
import { unitService } from "../../service";
import { useAuthToken } from "../useAuthToken";
import { useGlobalHook } from "../useGlobalHook";

export const useUnitHook = () => {
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
      unitService.get({
        accessToken,
        setDatas,
        setLoading,
        setSearchQuery,
        setUpdateData,
      });
    } else {
      const timeoutId = setTimeout(() => {
        unitService.search({
          accessToken,
          setDatas,
          setUpdateData,
          searchQuery,
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
