const Select = ({ option, register }) => {
  return (
    <form className="max-w-sm mx-auto">
      <label
        htmlFor="countries" // Mengganti for dengan htmlFor di React
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Select Departement
      </label>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        {...register("id_departement", { required: "Departement is required" })}
      >
        <option selected>Choose a department</option>
        {option.length > 0 ? (
          option.map((item) => (
            <option key={item.id} value={item.id}>
              {item.nama_departement}
            </option>
          ))
        ) : (
          <option>No data available</option>
        )}
      </select>
    </form>
  );
};

export default Select;
