import BreadCrumbs from "./BreadCrumbs";

const ContainerContent = ({ children, className }) => {
  return (
    <>
      <div className={` ${className} w-full pb-10 gap-2 px-6 pt-10`}>
        <BreadCrumbs />
        {children}
      </div>
    </>
  );
};

export default ContainerContent;
