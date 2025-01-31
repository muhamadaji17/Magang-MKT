import React from "react";

const TableHead = ({ tableConfig }) => {
  return (
    <thead className={tableConfig.classNameHead}>
      <tr>
        {tableConfig.headDescription.map((title, index) => (
          <th scope="col" className="px-6 py-3" key={index}>
            {title}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
