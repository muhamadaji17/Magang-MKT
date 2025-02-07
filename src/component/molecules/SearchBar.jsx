import React from "react";
import { CiSearch } from "react-icons/ci";
import { Input } from "../atoms";

const Searchbar = ({ handleSearch, inputValue }) => {
  return (
    <div className="relative">
      <CiSearch className="text-xl text-slate-500 absolute top-1/2 left-2 -translate-y-1/2" />
      <Input
        onChange={handleSearch}
        id="search"
        type="search"
        placeholder="Search..."
        value={inputValue}
        className={`placeholder:text-[12px] p-2 pl-8 border border-slate-400 my-2 text-sm outline-none rounded-md w-48`}
      />
    </div>
  );
};

export default Searchbar;
