import Side from "../atom/Side";
import TopBar from "../moleculs/TopBar";

const ContentLayout = ({ children }) => {
  return (
    <>
      <Side>
        <div className="sm:ml-64">
          <TopBar />
          {children}
        </div>
      </Side>
    </>
  );
};

export default ContentLayout;
