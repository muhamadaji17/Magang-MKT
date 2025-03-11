const FormTitle = ({ title, description }) => {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-blue-800">{title}</h1>
        <p className="text-sm text-slate-600">{description}</p>
      </div>
    </>
  );
};

export default FormTitle;
