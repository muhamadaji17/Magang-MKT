import { useEffect } from "react";
import { useGlobalHook } from "../useGlobalHook";
import { departementService } from "../../service";
import { useAuthToken } from "../useAuth";

export const useDepartementHook = () => {
  const { datas, setDatas } = useGlobalHook();
  const { showModal, setShowModal } = useGlobalHook();
  const { showModalWithId, setShowModalWithId } = useGlobalHook();
  const { updateData, setUpdateData } = useGlobalHook();
  const { loading, setLoading } = useGlobalHook();
  const { getDataColumn, setGetDataColumn } = useGlobalHook();
  const { searchQuery, setSearchQuery } = useGlobalHook();
  const { typeModal, setTypeModal } = useGlobalHook();

  const accessToken = useAuthToken();

  useEffect(() => {
    if (Object.keys(searchQuery).length === 0) {
      departementService.get({
        accessToken,
        setDatas,
        setLoading,
        setUpdateData,
        setSearchQuery,
      });
    } else {
      const timeoutId = setTimeout(() => {
        departementService.search({
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
    showModal,
    accessToken,
    setShowModal,
    showModalWithId,
    setShowModalWithId,
    updateData,
    setUpdateData,
    loading,
    getDataColumn,
    setGetDataColumn,
    searchQuery,
    setSearchQuery,
    typeModal,
    setTypeModal,
  };
};
