/** @format */

const InputTable = ({ configTable, handleSearch }) => {
  return (
    <>
      {configTable.map((data, index) =>
        data.type === "text" ? (
          <input
            key={index}
            type="text"
            placeholder={data.title}
            onChange={(e) => handleSearch(e.target.value, data.key)}
            className="bg-white border border-gray-400 rounded-md py-2 px-3 outline-none w-full placeholder:text-black text-xs"
          />
        ) : data.type === "select" ? (
          <select
            key={index}
            onChange={(e) => handleSearch(e.target.value, data.key)}
            defaultValue={""}
            className="bg-white border border-gray-400 rounded-md py-2 px-3 outline-none w-full text-xs"
          >
            <option value="" disabled>
              {data.placeholder}
            </option>
            {data.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : null
      )}
    </>
  );
};

export default InputTable;
