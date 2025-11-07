/** @format */

const TableHead = ({ configTable, type }) => (
  <thead
    className={
      type === "table" ? "text-xs text-white text-center bg-blue-950 " : ""
    }
  >
    <tr>
      {type === "table" && (
        <th scope="col" className=" py-3">
          No
        </th>
      )}

      {configTable.map((data, index) => (
        <th
          scope="col"
          className={
            type === "table"
              ? "px-6 py-3"
              : "border border-gray-400 p-2 text-center"
          }
          key={index}
        >
          {data.title}
        </th>
      ))}

      {type === "table" && (
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      )}
    </tr>
  </thead>
);

export default TableHead;
