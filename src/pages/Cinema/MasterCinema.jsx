import { LayoutCard } from "../../component/layout";
import { Tables } from "../../component/molecul";
import { Header } from "../../component/organism";
import { inputLogin } from "../../pattern";
import { columnMasterCinema } from "../../pattern/PatternCinema";
import { dataMasterCinema } from "../../utils/data/dataMasterCinema";

const MasterCinemaPage = () => {
  return (
    <>
      <Header pageName={"Master Cinema"} />
      <LayoutCard>
        <Tables
          columns={columnMasterCinema}
          bodies={dataMasterCinema}
          inputDataEdit={inputLogin}
          handleSubmitEdit={(data) => console.log("Edit", data)}
        />
      </LayoutCard>
    </>
  );
};

export default MasterCinemaPage;
