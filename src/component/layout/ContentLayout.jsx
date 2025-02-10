import { Outlet } from "react-router-dom";
import Side from "../atom/Side";
import TopBar from "../moleculs/TopBar";
import ContainerContent from "../atom/ContainerContent";

const ContentLayout = () => {
  return (
    <>
      <Side>
        <div className="sm:ml-64">
          <TopBar />
          <ContainerContent>
            <Outlet />
          </ContainerContent>
        </div>
      </Side>
    </>
  );
};

export default ContentLayout;
