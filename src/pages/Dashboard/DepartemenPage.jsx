import React, { useEffect } from "react";
import { useDepartementHook } from "../../hook";
import { Table } from "../../component/organism";
import { tableColumnDepartement } from "../../pattern";
import {
  inputAddDepartement,
  inputEditDepartement,
} from "../../pattern/PatternInputModal/Departement";
import { HeaderContent } from "../../component/molecules";
import { departementService } from "../../service";
import { Spinner } from "../../utils";
import { handleSearch } from "../../pattern/HandleSearch";
import { handleShowModal } from "../../pattern/HandleButton";

const DepartemenPage = () => {
  const {
    datas,
    setDatas,
    accessToken,
    showAddModal,
    setShowAddModal,
    showModalWithId,
    setShowModalWithId,
    updateData,
    setUpdateData,
    loading,
    searchQuery,
    setSearchQuery,
    getDataColumn,
    setGetDataColumn,
    typeModal,
    setTypeModal,
  } = useDepartementHook();

  useEffect(() => {
    if (searchQuery === "") {
      departementService.get(
        accessToken,
        setDatas,
        setUpdateData,
        setSearchQuery
      );
    } else {
      const timeoutId = setTimeout(() => {
        departementService.search(
          accessToken,
          setDatas,
          searchQuery,
          setUpdateData
        );
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [updateData, searchQuery]);

  return (
    <div className="">
      <HeaderContent
        showAddModal={showAddModal}
        setShowAddModal={setShowAddModal}
        setUpdateData={setUpdateData}
        inputDataForm={inputAddDepartement}
        handleSearch={(e) => handleSearch(e.target.value, setSearchQuery)}
        inputValue={searchQuery}
      />
      {!loading ? (
        <Table
          dataTable={datas}
          tableConfig={tableColumnDepartement}
          dataColumn={getDataColumn}
          typeModal={typeModal}
          dataForm={inputEditDepartement(getDataColumn)}
          showModalWithId={showModalWithId}
          setShowModalWithId={setShowModalWithId}
          setUpdateData={setUpdateData}
          setSearchQuery={setSearchQuery}
          handleShowModal={(data, typeModal) => {
            handleShowModal(true, setShowModalWithId);
            setTypeModal(typeModal);
            setGetDataColumn({ ...data, name: data.nama_departement });
          }}
          classNameHead={"text-xs text-white text-center uppercase bg-blue-700"}
        />
      ) : (
        <Spinner
          className={"flex items-center justify-center h-1/2 mt-36"}
          size={"w-20 h-20"}
        />
      )}

      {datas?.length === 0 && !loading && (
        <div className="text-center pt-20">
          <span className="font-bold">{`"${searchQuery}" `}</span>
          <span>tidak ditemukan.</span>
        </div>
      )}
    </div>
  );
};

export default DepartemenPage;
