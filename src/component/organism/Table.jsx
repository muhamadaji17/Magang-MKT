import React from "react";
import { TableHead, TableBody, SearchBar } from "../molecules";
import { Button } from "../atoms";

const Table = ({ dataTable, tableConfig }) => {
  return (
    <div className="">
      <div className="flex justify-between mb-3">
        <SearchBar />
        <Button className={"bg-blue-600 text-sm px-3 text-white rounded-md"}>
          {tableConfig.buttonText}
        </Button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <TableHead tableConfig={tableConfig} />
          <TableBody data={dataTable} />
        </table>
      </div>
    </div>
  );
};

export default Table;
