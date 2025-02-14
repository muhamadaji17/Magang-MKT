import { useEffect } from "react";
import { departementService } from "../service";

export const useDataDepartement = (
  accessToken,
  typeModal,
  setDatas,
  setUpdateData,
  setLoading
) => {
  useEffect(() => {
    if (typeModal === "add" || typeModal === "edit") {
      departementService.get({
        accessToken,
        setDatas,
        setUpdateData,
        setLoading,
      });
    }
  }, [typeModal]);
};
