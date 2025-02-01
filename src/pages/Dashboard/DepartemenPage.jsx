import React, { useEffect } from "react";
import { DataDepartementService } from "../../service/getDataTableService";
import { useAccessToken } from "../../hook/useGlobalContext";
import { useGlobalHook } from "../../hook";
import { Modal, Table } from "../../component/organism";
import { tableConfig } from "../../pattern/PatternTable/Departemen";

const DepartemenPage = () => {
  const { datas, setDatas } = useGlobalHook();
  const { accessToken } = useAccessToken();
  const { showModal, setShowModal } = useGlobalHook();

  const inputAddData = [
    {
      placeholder: "Teknologi Informasi",
      type: "text",
      title: "Nama Departemen: ",
      name: "nama_departement",
      labelClassName: "text-[12px] font-semibold text-slate-700",
      inputClassName:
        "w-full rounded-md py-2 px-3 placeholder:text-[12px] border outline-none border-slate-400 my-2 text-sm",

      // addOptionError: errorOptions.username,
    },
    {
      placeholder: "0X12B",
      type: "text",
      title: "Kode Departemen: ",
      name: "departement_code",
      labelClassName: "text-[12px] font-semibold text-slate-700",
      inputClassName:
        "w-full rounded-md py-2 px-3 placeholder:text-[12px] border outline-none border-slate-400 my-2 text-sm",

      // addOptionError: errorOptions.username,
    },
  ];

  useEffect(() => {
    DataDepartementService(accessToken, setDatas);
  }, []);

  return (
    <div className="">
      {datas && (
        <Table
          dataTable={datas}
          tableConfig={tableConfig}
          setShowModal={setShowModal}
        />
      )}

      {showModal && (
        <Modal dataForm={inputAddData} setShowModal={setShowModal} />
      )}
    </div>
  );
};

export default DepartemenPage;
