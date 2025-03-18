import { useLocation } from "react-router-dom";
import { Breadcrumbs, Button } from "..";

const HeaderContent = ({ handleOpenModal, titleButton, value, onChange }) => {
  const location = useLocation();
  return (
    <>
      <div className="flex justify-between items-center">
        <Breadcrumbs />
        {location.pathname === "/" ? null : (
          <Button
            className="bg-blue-800 text-white hover:bg-blue-600 transition-all duration-200"
            onClick={(e) => handleOpenModal(e)}
          >
            {titleButton}
          </Button>
        )}
      </div>
    </>
  );
};

export default HeaderContent;
