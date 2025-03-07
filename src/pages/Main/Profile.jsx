import { LayoutCard } from "../../component/layout";
import { DataInfomations, Tables } from "../../component/molecul";
import { Header } from "../../component/organism";
import {
  columnProfile,
  dataLabelProfile,
} from "../../pattern/PatternMain/PatternProfile";
import {
  dataTableProfile,
  dataValueLabelProfile,
} from "../../utils/data/dataProfile";

const ProfilePage = () => {
  return (
    <>
      <Header pageName={"Profile"} />
      <div className="flex gap-5">
        <div className="w-1/2">
          <LayoutCard>
            <DataInfomations
              dataLabel={dataLabelProfile}
              dataValueLabel={dataValueLabelProfile}
            />
          </LayoutCard>
        </div>
        <div className="w-full">
          <LayoutCard>
            <Tables columns={columnProfile} bodies={dataTableProfile} />
          </LayoutCard>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
