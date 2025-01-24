const ShowPassword = ({ id, checked, onChange, label }) => {
  return (
    <>
      <label htmlFor={id} className="flex justify-center items-center gap-2">
        <input type="checkbox" id={id} checked={checked} onChange={onChange} />
        {label}
      </label>
    </>
  );
};

export default ShowPassword;
