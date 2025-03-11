import { Breadcrumbs, Button } from "..";

const HeaderContent = ({ handleOpenModal, titleButton }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <Breadcrumbs />
        <Button
          className="bg-blue-800 text-white hover:bg-blue-600 transition-all duration-200"
          onClick={(e) => handleOpenModal(e)}
        >
          {titleButton}
        </Button>
      </div>
    </>
  );
};

export default HeaderContent;
