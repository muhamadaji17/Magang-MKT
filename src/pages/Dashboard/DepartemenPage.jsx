import React, { useEffect, useState } from "react";
import { useDepartementHook } from "../../hook";
import { Table } from "../../component/organism";
import { tableDepartemen } from "../../pattern";
import {
  inputAddDepartement,
  inputEditDepartement,
} from "../../pattern/PatternInputModal/Departement";
import { HeaderContent } from "../../component/molecules";
import {
  getDataDepartementService,
  addDataDepartementService,
  deleteDataDepartementService,
  editDataDepartementService,
} from "../../service";

const DepartemenPage = () => {
  const {
    datas,
    setDatas,
    accessToken,
    showAddModal,
    setShowAddModal,
    showEditModal,
    setShowEditModal,
    updateData,
    setUpdateData,
  } = useDepartementHook();
  const [dataId, setDataId] = useState("");

  useEffect(() => {
    getDataDepartementService(accessToken, setDatas, setUpdateData);
  }, [updateData]);

  return (
    <div className="">
      <HeaderContent
        service={addDataDepartementService}
        accessToken={accessToken}
        showAddModal={showAddModal}
        setShowAddModal={setShowAddModal}
        setUpdateData={setUpdateData}
        inputDataForm={inputAddDepartement}
        dataId={dataId}
        setDataId={setDataId}
      />
      {datas && (
        <Table
          dataTable={datas}
          accessToken={accessToken}
          tableConfig={tableDepartemen}
          dataId={dataId}
          setDataId={setDataId}
          editService={editDataDepartementService}
          deleteService={deleteDataDepartementService}
          dataForm={inputEditDepartement}
          showEditModal={showEditModal}
          setShowEditModal={setShowEditModal}
          setUpdateData={setUpdateData}
          classNameHead={"text-xs text-white text-center uppercase bg-blue-700"}
        />
      )}
    </div>
  );
};

export default DepartemenPage;
