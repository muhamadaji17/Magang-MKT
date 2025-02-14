import { useEffect, useState } from "react";
import { unitService } from "../../service";
import { useAuthToken } from "../useAuth";
import { useGlobalHook } from "../useGlobalHook";
import { useDataDepartement } from "../useDataDepartement";

export const useUnitHook = () => {
  const { datas, setDatas } = useGlobalHook();
  const { loading, setLoading } = useGlobalHook();
  const { updateData, setUpdateData } = useGlobalHook();
  const { showModal, setShowModal } = useGlobalHook();
  const { showModalWithId, setShowModalWithId } = useGlobalHook();
  const { searchQuery, setSearchQuery } = useGlobalHook();
  const { getDataColumn, setGetDataColumn } = useGlobalHook();
  const { typeModal, setTypeModal } = useGlobalHook();
  const accessToken = useAuthToken();
  const [dataDepartement, setDataDepartement] = useState([]);

  useEffect(() => {
    if (Object.keys(searchQuery).length === 0) {
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

  useDataDepartement(
    accessToken,
    typeModal,
    setDataDepartement,
    setUpdateData,
    setLoading
  );

  return {
    datas,
    accessToken,
    loading,
    setLoading,
    showModal,
    dataDepartement,
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
