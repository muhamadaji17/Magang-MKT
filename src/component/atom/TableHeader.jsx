const TableHeader = ({ labels }) => {
  return (
    <>
      <thead>
        <tr className="text-center bg-primary text-white">
          {labels.map((label, index) => (
            <th key={index} className="text-start font-semibold py-2 px-4">
              {label.name}
            </th>
          ))}
        </tr>
      </thead>
    </>
  );
};

export default TableHeader;
