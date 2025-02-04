const FormTitle = ({ title, description }) => {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="font-semibold text-xl">{title}</h1>
        <p className="text-sm text-[#333]">{description}</p>
      </div>
    </>
  );
};

export default FormTitle;
