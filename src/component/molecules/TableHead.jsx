const TableHead = ({ dataHead }) => {
  return (
    <thead className={"text-xs text-white text-center bg-blue-700 "}>
      <tr>
        <th scope="col" className="px-6 py-3">
          No
        </th>
        {dataHead?.map((data, index) => (
          <th scope="col" className="px-6 py-3" key={index}>
            {data.title}
          </th>
        ))}

        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
