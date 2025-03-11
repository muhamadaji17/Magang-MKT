const ShowPassword = ({ label, id, checked, onChange }) => {
  return (
    <>
      <div className="flex items-center pt-4">
        <input type="checkbox" id={id} checked={checked} onChange={onChange} />
        <label htmlFor={id} className="ml-2">
          {label}
        </label>
      </div>
    </>
  );
};

export default ShowPassword;
