const Table = ({ label, children }) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-200 bg-primary uppercase">
          <tr>
            {label.map((column, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
        {children}
      </table>
    </div>
  );
};

export default Table;
