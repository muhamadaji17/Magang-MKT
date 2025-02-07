import React from "react";

const TableHead = ({ className, dataHead }) => {
  return (
    <thead className={className || ""}>
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
