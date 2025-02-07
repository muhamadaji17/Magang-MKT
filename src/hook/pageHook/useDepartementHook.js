import { useAccessToken } from "../useGlobalContext";
import { useGlobalHook } from "../useGlobalHook";

export const useDepartementHook = () => {
  const { datas, setDatas } = useGlobalHook();
  const { accessToken } = useAccessToken();
  const { showAddModal, setShowAddModal } = useGlobalHook();
  const { showModalWithId, setShowModalWithId } = useGlobalHook();
  const { updateData, setUpdateData } = useGlobalHook();
  const { loading } = useGlobalHook();
  const { getDataColumn, setGetDataColumn } = useGlobalHook();
  const { searchQuery, setSearchQuery } = useGlobalHook();
  const { typeModal, setTypeModal } = useGlobalHook();

  return {
    datas,
    setDatas,
    accessToken,
    showAddModal,
    setShowAddModal,
    updateData,
    setUpdateData,
    showModalWithId,
    setShowModalWithId,
    loading,
    getDataColumn,
    setGetDataColumn,
    searchQuery,
    setSearchQuery,
    typeModal,
    setTypeModal,
  };
};
