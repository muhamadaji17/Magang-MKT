import React from "react";

const TableHead = ({ className, titles }) => {
  return (
    <thead className={className || ""}>
      <tr>
        {titles.map((title, index) => (
          <th scope="col" className="px-6 py-3" key={index}>
            {title}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
