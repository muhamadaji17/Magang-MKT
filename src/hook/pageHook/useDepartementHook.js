import { useAccessToken } from "../useGlobalContext";
import { useGlobalHook } from "../useGlobalHook";

export const useDepartementHook = () => {
  const { datas, setDatas } = useGlobalHook();
  const { accessToken, setAccessToken } = useAccessToken();
  const { showAddModal, setShowAddModal } = useGlobalHook();
  const { showEditModal, setShowEditModal } = useGlobalHook();
  const { updateData, setUpdateData } = useGlobalHook();

  return {
    datas,
    setDatas,
    accessToken,
    setAccessToken,
    showAddModal,
    setShowAddModal,
    updateData,
    setUpdateData,
    showEditModal,
    setShowEditModal,
  };
};
