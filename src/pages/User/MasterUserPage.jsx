import { LayoutCard } from "../../component/layout";
import { Tables } from "../../component/molecul";
import { Header } from "../../component/organism";
import { useZustand } from "../../hook";
import {
  columnsTableMasterUSer,
  inputLogin,
  inputRegister,
} from "../../pattern";

const MasterUserPage = () => {
  const { dataModalTree, dataUser } = useZustand();

  const inputPartial = (data) => [
    {
      jenisInput: "input",

      placeholder: "01003xxxxx",
      type: "text",
      title: "NIP (Nomor Induk Pegawai)",
      name: "username",
      className: "",
      value: data.id,
      grid: "12",
    },
    {
      jenisInput: "input",

      placeholder: "*******",
      type: "password",
      grid: "12",
      title: "Password",
      name: "password",
      className: "",
    },
  ];

  return (
    <>
      <Header
        pageName={"Master User"}
        inputDataModalAdd={inputLogin}
        handleSubmitDataModalAdd={(data) => console.log(data)}
      />
      <LayoutCard>
        <Tables
          columns={columnsTableMasterUSer}
          bodies={dataUser}
          inputDataVoid={inputLogin}
          inputDataRefund={inputRegister}
          inputDataRefundPartial={inputPartial(dataModalTree)}
          handleSubmitVoid={(data) => console.log("void", data)}
          handleSubmitRefund={(data) => console.log("refund", data)}
          handleSubmitRefundPartial={(data) => console.log("refund", data)}
        />
      </LayoutCard>
    </>
  );
};

export default MasterUserPage;
