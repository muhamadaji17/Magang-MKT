import React, { useEffect } from "react";
import { DataDepartementService } from "../../service/getDataTableService";
import { useAccessToken } from "../../hook/useGlobalContext";
import { useGlobalHook } from "../../hook";
import { Table } from "../../component/organism";
import { tableConfig } from "../../pattern/PatternTable/Departemen";

const DepartemenPage = () => {
  const { datas, setDatas } = useGlobalHook();
  const { accessToken } = useAccessToken();

  useEffect(() => {
    DataDepartementService(accessToken, setDatas);
  }, []);

  return (
    <div className="">
      {datas && (
        <Table dataTable={datas} tableConfig={tableConfig.departemen} />
      )}
    </div>
  );
};

export default DepartemenPage;
