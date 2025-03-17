import { useLocation } from "react-router-dom";
import { Breadcrumbs, Button, Input } from "..";

const HeaderContent = ({ handleOpenModal, titleButton, value, onChange }) => {
  const location = useLocation();
  return (
    <>
      <div className="flex justify-between items-center">
        <Breadcrumbs />
        <div className="w-1/2">
          <Input
            placeholder="Search here ..."
            className="bg-slate-300 border-b-2 rounded-none border-slate-400 focus:outline-none"
            value={value}
            onChange={onChange}
          />
        </div>
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
