/* eslint-disable react/jsx-key */
import { LayoutCard } from "../component/layout";
import { CardItems } from "../component/molecul";
import { Header } from "../component/organism";
import data from "../utils/data/DashboardCard.json";

const DashboardPage = () => {
  return (
    <>
      <Header pageName={"Dashboard"} />
      <div className="grid grid-cols-3 gap-10">
        {data.map((item, index) => (
          <LayoutCard>
            <CardItems
              icon={item.icon}
              total={item.total}
              title={item.title}
              index={index}
            />
            {/* <CardItems data={data} /> */}
          </LayoutCard>
        ))}
      </div>
    </>
  );
};

export default DashboardPage;
