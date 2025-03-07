import { useState } from "react";
import InputOutRegis from "./inputOutRegis";

/* eslint-disable react/prop-types */
const TableHead = ({ data, inputDataEdit }) => {
  const [coba, setCoba] = useState();
  let timeout = null;

  console.log(coba);

  const handleSearch = (e) => {
    const { name, value } = e.target;

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      // const regex = new RegExp(value, "i"); // "i" untuk case-insensitive

      // const dataFilter = DataUSer.filter((item) => {
      //   if (name === "fullname") return regex.test(item.fullname);
      //   if (name === "nip") return regex.test(item.nip);
      //   return regex.test(item.fullname) || regex.test(item.nip); // Jika mencari di keduanya
      // });

      // console.log(dataFilter); // Update state dengan hasil pencarian
      setCoba((prev) => ({ ...prev, [name]: value }));
    }, 1000);
  };

  return (
    <thead className=" text-gray-700 uppercase text-sm ">
      {/* {inputDataEdit && ( */}
      <tr className="">
        {data.map((item, index) => (
          <th className="px-4 py-2 pb-10  border-b-2 " key={index}>
            <InputOutRegis
              label={item.label}
              name={item.key}
              sx={{
                "& .MuiInputBase-input": { fontSize: "13px" }, // Ukuran teks input
                "& .MuiInputLabel-root": { fontSize: "13px" },
              }}
              onChange={handleSearch}
            />
          </th>
        ))}
      </tr>
      {/* )} */}
      <tr className="border-b">
        {data.map((item, index) => (
          <th className="px-4 pt-10 pb-2" key={index}>
            {item.key}
          </th>
        ))}
        {inputDataEdit && <th className="px-4 py-2 ">Aksi</th>}
      </tr>
    </thead>
  );
};

export default TableHead;
